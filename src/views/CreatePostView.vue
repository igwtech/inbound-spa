<template>
    <div class="create-post-view">
        <h1 class="text-3xl font-bold mb-6">Create a New Post</h1>
        <form @submit.prevent="submitPost">
            <div class="form-group">
                <label for="client">Client</label>
                <select id="client" v-model="selectedClient" required>
                    <option disabled value="">Please select a client</option>
                    <option v-for="client in clients" :key="client.id" :value="client.clientId">
                        {{ client.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="hub">Hub</label>
                <select id="hub" v-model="selectedHub" required>
                    <option disabled value="">Please select a hub</option>
                    <option v-for="hub in hubs" :key="hub.id" :value="hub.hubId">
                        {{ hub.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="post-type">Post Type</label>
                <select id="post-type" v-model="selectedPostType" required>
                    <option disabled value="">Please select a post type</option>
                    <option value="945">EDI X12 945</option>
                    <option value="940">EDI X12 940</option>
                </select>
            </div>
            <div class="form-group">
                <label for="post-content">Post Content</label>
                <textarea id="post-content" v-model="postContent" rows="5" required></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Create Post' }}
            </button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useClientStore } from '@/stores/client'
import { useHubStore } from '@/stores/hub'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'

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
        // Optionally, redirect to another page or clear the form
        selectedClient.value = ''
        selectedHub.value = ''
        selectedPostType.value = ''
        postContent.value = ''
        alert('Post created successfully!')
    } catch (error) {
        errorMessage.value = 'Failed to create post. Please try again.'
        console.error(error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
.create-post-view {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

select,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
