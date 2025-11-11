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
        <div>
            <h1>Clients</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client.id">
                        <td>{{ client.id }}</td>
                        <td>{{ client.clientId }}</td>
                        <td>{{ client.name }}</td>
                        <td>{{ client.active }}</td>
                        <td>{{ client.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="clients.length === 0">No clients found</p>

            <h1>Hubs</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hub ID</th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hub in hubs" :key="hub.id">
                        <td>{{ hub.id }}</td>
                        <td>{{ hub.hubId }}</td>
                        <td>{{ hub.name }}</td>
                        <td>{{ hub.active }}</td>
                        <td>{{ hub.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="hubs.length === 0">No hubs found</p>
        </div>
    </DashboardLayout>
</template>
