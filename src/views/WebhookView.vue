<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Webhook } from '@/domain/webhook/Webhook'
import { useWebhookStore } from '@/stores/webhook'
import { WebhookService } from '@/application/webhook/WebhookService'
import { postTypes } from '@/data/postTypes'
import { useAuthStore } from '@/stores/auth'

const webhooks = ref<Webhook[]>([])
const webhookStore = useWebhookStore()
const showCreateWebhookModal = ref(false)
const newWebhookUrl = ref('')
const newWebhookAuth = ref('')
const newWebhookPostTypes = ref<string[]>([])
const errorMessage = ref<string | null>(null)
const showPostTypesDropdown = ref(false)

const webhookService = new WebhookService(webhookStore.repository)
const authStore = useAuthStore();
const availablePostTypes = computed(() => {
    return postTypes.filter(pt => !newWebhookPostTypes.value.includes(pt.value))
})

function addPostType(postType: string) {
    if (!newWebhookPostTypes.value.includes(postType)) {
        newWebhookPostTypes.value.push(postType)
    }
    showPostTypesDropdown.value = false
}

function removePostType(postType: string) {
    newWebhookPostTypes.value = newWebhookPostTypes.value.filter(pt => pt !== postType)
}

async function fetchWebhooks() {
    try {
        webhooks.value = await webhookService.findAll()
    } catch (error) {
        errorMessage.value = 'Failed to fetch webhooks.'
        console.error(error)
    }
}

function openCreateWebhookModal() {
    newWebhookUrl.value = ''
    newWebhookAuth.value = ''
    newWebhookPostTypes.value = []
    showCreateWebhookModal.value = true
}

async function createWebhook() {
    if (!newWebhookUrl.value) return
    try {
        const newWebhook: Partial<Webhook> = {
            uri: newWebhookUrl.value,
            user: authStore.user?.email,
            authentication: [newWebhookAuth.value],
            postTypes: newWebhookPostTypes.value,
        };
        await webhookService.create(newWebhook as Webhook)
        await fetchWebhooks()
        showCreateWebhookModal.value = false
    } catch (error) {
        errorMessage.value = 'Failed to create webhook.'
        console.error(error)
    }
}

onMounted(fetchWebhooks)
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8 py-6">
            <h1 class="text-3xl font-semibold text-white">Webhooks</h1>
            <p class="text-gray-400 mt-1">Configure webhooks for real-time integration updates</p>
        </div>

        <div class="mb-6 py-6">
            <button @click="openCreateWebhookModal"
                class="inline-flex items-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Webhook
            </button>
        </div>

        <!-- Create Webhook Modal -->
        <div v-if="showCreateWebhookModal"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div class="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
                <h2 class="text-2xl font-semibold text-white mb-4">Add New Webhook</h2>
                <div class="py-3">
                    <label for="webhookUrl" class="block text-sm font-medium text-gray-400 mb-2">Webhook URL</label>
                    <input type="text" id="webhookUrl" v-model="newWebhookUrl"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="https://example.com/webhook" />
                </div>
                <div class="mt-4 py-3">
                    <label for="webhookAuth" class="block text-sm font-medium text-gray-400 mb-2">Authentication</label>
                    <input type="text" id="webhookAuth" v-model="newWebhookAuth"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Authentication token" />
                </div>
                <div class="mt-4 py-3">
                    <label for="webhookPostTypes" class="block text-sm font-medium text-gray-400 mb-2">Post
                        Types</label>
                    <div class="relative">
                        <div @click="showPostTypesDropdown = !showPostTypesDropdown"
                            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white flex items-center justify-between cursor-pointer">
                            <span>
                                {{ newWebhookPostTypes.length > 0 ? `${newWebhookPostTypes.length} selected` : 'Select \
                                post types' }}
                            </span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div v-if="showPostTypesDropdown"
                            class="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
                            <ul>
                                <li v-for="postType in availablePostTypes" :key="postType.value"
                                    @click="addPostType(postType.value)"
                                    class="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer">
                                    {{ postType.name }} ({{ postType.value }})
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-2 flex flex-wrap gap-2">
                        <span v-for="postType in newWebhookPostTypes" :key="postType"
                            class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400">
                            {{postTypes.find(pt => pt.value === postType)?.name}} ({{ postType }})
                            <button @click="removePostType(postType)"
                                class="ml-1.5 text-green-400 hover:text-green-200">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-4">
                    <button @click="showCreateWebhookModal = false"
                        class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-200">
                        Cancel
                    </button>
                    <button @click="createWebhook"
                        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200">
                        Add
                    </button>
                </div>
            </div>
        </div>

        <div v-if="errorMessage" class="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-400">{{ errorMessage }}</p>
            </div>
        </div>

        <div v-if="webhooks.length > 0"
            class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-700/50">
                    <thead>
                        <tr class="bg-gray-800/80">
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                ID</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Endpoint URL</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                User</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/30">
                        <tr v-for="webhook in webhooks" :key="webhook.id"
                            class="hover:bg-gray-800/30 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-gray-300 font-medium">{{ webhook.id }}</span>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-300 font-mono text-sm truncate">{{ webhook.uri }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ webhook.user }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">{{ webhook.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-else class="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <p class="text-gray-400 text-lg">No webhooks found</p>
            <p class="text-gray-500 text-sm mt-2">Configure your first webhook to receive real-time updates</p>
        </div>
    </div>
</template>
