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
        <div class="p-8">
            <h1 class="text-3xl font-bold mb-6">Posts</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Post ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Owner</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700">
                        <tr v-for="post in posts" :key="post.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ post.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ post.postId }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ post.status }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ post.owner.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ post.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p v-if="posts.length === 0" class="mt-6 text-center">No posts found</p>
        </div>
    </DashboardLayout>
</template>
