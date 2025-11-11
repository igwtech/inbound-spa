<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '@/domain/post/Post'
import { usePostStore } from '@/stores/post'
import { PostService } from '@/application/post/PostService'
import DashboardLayout from '@/components/DashboardLayout.vue'

const posts = ref<Post[]>([])
const postStore = usePostStore()

onMounted(async () => {
    const postService = new PostService(postStore.repository)
    posts.value = await postService.findAll()
})
</script>

<template>
    <DashboardLayout>
        <div>
            <h1>Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Post ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.postId }}</td>
                        <td>{{ post.status }}</td>
                        <td>{{ post.owner.email }}</td>
                        <td>{{ post.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="posts.length === 0">No posts found</p>
        </div>
    </DashboardLayout>
</template>
