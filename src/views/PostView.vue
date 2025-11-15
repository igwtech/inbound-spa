<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '@/domain/post/Post'
import { usePostStore } from '@/stores/post'
import { PostService } from '@/application/post/PostService'
import CreatePostView from '@/views/CreatePostView.vue'

const posts = ref<Post[]>([])
const postStore = usePostStore()
const showCreatePostModal = ref(false)

onMounted(async () => {
    const postService = new PostService(postStore.repository)
    posts.value = await postService.findAll()
})
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8 flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-semibold text-white">Posts</h1>
                <p class="text-gray-400 mt-1">Manage and track your integration posts</p>
            </div>
            <div class="mb-6 py-6">
                <button @click="showCreatePostModal = true"
                    class="inline-flex items-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Create Post
                </button>
            </div>
        </div>

        <!-- Create Post Modal -->
        <div v-if="showCreatePostModal"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div class="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-4xl">
                <CreatePostView @close="showCreatePostModal = false" />
            </div>
        </div>
    </div>
    <div v-if="posts.length > 0"
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-700/50">
                <thead>
                    <tr class="bg-gray-800/80">
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Post ID</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Status</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Type</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Client</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Hub
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Created At</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700/30">
                    <tr v-for="post in posts" :key="post.postId"
                        class="hover:bg-gray-800/30 transition-colors duration-150">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="text-gray-300 font-mono text-sm">{{ post.postId }}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                :class="{
                                    'bg-green-500/10 text-green-400': post.status === 'published' || post.status === 'processed',
                                    'bg-yellow-500/10 text-yellow-400': post.status === 'queued',
                                    'bg-red-500/10 text-red-400': post.status === 'rejected'
                                }">
                                {{ post.status }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ post.postType }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ post.client }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ post.hub }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">{{ post.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div v-else class="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
        <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p class="text-gray-400 text-lg">No posts found</p>
        <p class="text-gray-500 text-sm mt-2">Create your first post to get started</p>
    </div>
</template>
