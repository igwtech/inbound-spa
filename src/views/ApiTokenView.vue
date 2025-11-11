<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiTokenService } from '@/services'
import type { ApiToken } from '@/domain/api-token/ApiToken'

const tokens = ref<ApiToken[]>([])
const isLoading = ref(true)
const errorMessage = ref<string | null>(null)

async function fetchTokens() {
    try {
        isLoading.value = true
        tokens.value = await apiTokenService.findAll()
    } catch (error) {
        errorMessage.value = 'Failed to fetch API tokens.'
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

async function createToken() {
    try {
        await apiTokenService.create('Token ' + (tokens.value.length + 1))
        await fetchTokens()
    } catch (error) {
        errorMessage.value = 'Failed to create API token.'
        console.error(error)
    }
}

async function deleteToken(id: number) {
    try {
        await apiTokenService.delete(id)
        await fetchTokens()
    } catch (error) {
        errorMessage.value = 'Failed to delete API token.'
        console.error(error)
    }
}

onMounted(fetchTokens)
</script>

<template>
    <div class="api-token-view">
        <h1>API Token Management</h1>
        <button @click="createToken">Create New Token</button>
        <div v-if="isLoading">Loading...</div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <ul v-if="!isLoading && tokens.length">
            <li v-for="token in tokens" :key="token.id">
                <span>{{ token.name }}</span>
                <button @click="deleteToken(token.id)">Delete</button>
            </li>
        </ul>
        <p v-if="!isLoading && !tokens.length">No API tokens found.</p>
    </div>
</template>

<style scoped>
.api-token-view {
    padding: 2rem;
}

button {
    margin-bottom: 1rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.error-message {
    color: red;
}
</style>
