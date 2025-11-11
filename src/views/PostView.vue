<template>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '@/domain/post/Post'
import { PostService } from '@/application/post/PostService'
import { InMemoryPostRepository } from '@/infrastructure/post/InMemoryPostRepository'

const posts = ref<Post[]>([])

onMounted(async () => {
    const postRepository = new InMemoryPostRepository()
    const postService = new PostService(postRepository)
    posts.value = await postService.findAll()
})
</script>
