<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
            <h1 class="text-3xl font-semibold text-white">Create a New Post</h1>
            <p class="text-gray-400 mt-1">Submit a new integration post for processing</p>
        </div>

        <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-8">
            <form @submit.prevent="submitPost" class="space-y-6">
                <div>
                    <label for="client" class="block text-sm font-medium text-gray-300 mb-2">Client</label>
                    <select id="client" v-model="selectedClient" required
                        class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                        <option disabled value="">Please select a client</option>
                        <option v-for="client in clients" :key="client.id" :value="client.clientId">
                            {{ client.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="hub" class="block text-sm font-medium text-gray-300 mb-2">Hub</label>
                    <select id="hub" v-model="selectedHub" required
                        class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                        <option disabled value="">Please select a hub</option>
                        <option v-for="hub in hubs" :key="hub.id" :value="hub.hubId">
                            {{ hub.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="post-type" class="block text-sm font-medium text-gray-300 mb-2">Post Type</label>
                    <select id="post-type" v-model="selectedPostType" required
                        class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                        <option disabled value="">Please select a post type</option>
                        <option value="945">EDI X12 945</option>
                        <option value="940">EDI X12 940</option>
                    </select>
                </div>

                <div>
                    <label for="post-content" class="block text-sm font-medium text-gray-300 mb-2">Post Content</label>
                    <textarea id="post-content" v-model="postContent" rows="8" required
                        class="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white font-mono text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-y"
                        placeholder="Enter your post content here..."></textarea>
                </div>

                <div v-if="errorMessage" class="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-red-400">{{ errorMessage }}</p>
                    </div>
                </div>

                <div class="flex items-center justify-end space-x-4 pt-4">
                    <RouterLink to="/posts"
                        class="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Cancel
                    </RouterLink>
                    <button type="submit" :disabled="isSubmitting"
                        class="inline-flex items-center px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ isSubmitting ? 'Creating...' : 'Create Post' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useClientStore } from '@/stores/client'
import { useHubStore } from '@/stores/hub'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const clientStore = useClientStore()
const hubStore = useHubStore()
const postStore = usePostStore()

const { clients } = storeToRefs(clientStore)
const { hubs } = storeToRefs(hubStore)

const selectedClient = ref('')
const selectedHub = ref('')
const selectedPostType = ref('')
const postContent = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

onMounted(() => {
    clientStore.fetchClients()
    hubStore.fetchHubs()
})

async function submitPost() {
    if (!selectedClient.value || !selectedHub.value || !postContent.value || !selectedPostType.value) {
        errorMessage.value = 'Please fill out all fields.'
        return
    }

    isSubmitting.value = true
    errorMessage.value = ''

    try {
        await postStore.createPost({
            client: `${selectedClient.value}`,
            hub: `${selectedHub.value}`,
            postType: parseInt(selectedPostType.value),
            data: [postContent.value]
        })
        router.push('/posts')
    } catch (error) {
        errorMessage.value = 'Failed to create post. Please try again.'
        console.error(error)
    } finally {
        isSubmitting.value = false
    }
}
</script>
