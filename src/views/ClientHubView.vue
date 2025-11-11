<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Client } from '@/domain/client/Client'
import { useClientStore } from '@/stores/client'
import { ClientService } from '@/application/client/ClientService'
import type { Hub } from '@/domain/hub/Hub'
import { useHubStore } from '@/stores/hub'
import { HubService } from '@/application/hub/HubService'
import DashboardLayout from '@/components/DashboardLayout.vue'

const clients = ref<Client[]>([])
const hubs = ref<Hub[]>([])
const clientStore = useClientStore()
const hubStore = useHubStore()

onMounted(async () => {
    const clientService = new ClientService(clientStore.repository)
    clients.value = await clientService.findAll()

    const hubService = new HubService(hubStore.repository)
    hubs.value = await hubService.findAll()
})
</script>

<template>
    <DashboardLayout>
        <div class="p-8">
            <h1 class="text-3xl font-bold mb-6">Clients</h1>
            <div class="overflow-x-auto mb-12">
                <table class="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Client ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Active</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700">
                        <tr v-for="client in clients" :key="client.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ client.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ client.clientId }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ client.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ client.active }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ client.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p v-if="clients.length === 0" class="mt-6 text-center">No clients found</p>

            <h1 class="text-3xl font-bold mb-6">Hubs</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Hub ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Active</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700">
                        <tr v-for="hub in hubs" :key="hub.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ hub.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ hub.hubId }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ hub.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ hub.active }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ hub.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p v-if="hubs.length === 0" class="mt-6 text-center">No hubs found</p>
        </div>
    </DashboardLayout>
</template>
