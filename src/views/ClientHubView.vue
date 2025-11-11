<template>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Client } from '@/domain/client/Client'
import { ClientService } from '@/application/client/ClientService'
import { InMemoryClientRepository } from '@/infrastructure/client/InMemoryClientRepository'
import type { Hub } from '@/domain/hub/Hub'
import { HubService } from '@/application/hub/HubService'
import { InMemoryHubRepository } from '@/infrastructure/hub/InMemoryHubRepository'

const clients = ref<Client[]>([])
const hubs = ref<Hub[]>([])

onMounted(async () => {
    const clientRepository = new InMemoryClientRepository()
    const clientService = new ClientService(clientRepository)
    clients.value = await clientService.findAll()

    const hubRepository = new InMemoryHubRepository()
    const hubService = new HubService(hubRepository)
    hubs.value = await hubService.findAll()
})
</script>
