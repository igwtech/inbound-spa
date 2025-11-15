<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import { chartService } from '@/services'
import type { Chart } from '@/domain/chart/Chart'

const emptyChart: Chart = { labels: [], datasets: [] }
const uptimeData = ref<Chart>(emptyChart)
const postsData = ref<Chart>(emptyChart)
const webhooksData = ref<Chart>(emptyChart)

onMounted(async () => {
  uptimeData.value = await chartService.getUptimeData()
  postsData.value = await chartService.getPostsData()
  webhooksData.value = await chartService.getWebhooksData()
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-white">Dashboard</h1>
      <p class="text-gray-400 mt-1">Overview of your integration platform</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-6">
      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:border-green-500/30">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-400 uppercase tracking-wide">Clients</p>
            <p class="text-4xl font-bold text-white mt-2">12</p>
          </div>
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:border-green-500/30">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-400 uppercase tracking-wide">Hubs Connected</p>
            <p class="text-4xl font-bold text-white mt-2">8</p>
          </div>
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:border-green-500/30">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-400 uppercase tracking-wide">Users Active</p>
            <p class="text-4xl font-bold text-white mt-2">25</p>
          </div>
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:border-green-500/30">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-400 uppercase tracking-wide">Uptime</p>
            <p class="text-4xl font-bold text-green-500 mt-2">99.8%</p>
          </div>
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-6 h-96">
        <h3 class="text-lg font-semibold text-white mb-4">Posts Processed/Queued/Rejected</h3>
        <div class="h-80">
          <BarChart :chart-data="postsData" :chart-options="chartOptions" />
        </div>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-6 h-96">
        <h3 class="text-lg font-semibold text-white mb-4">System Uptime</h3>
        <div class="h-80">
          <LineChart :chart-data="uptimeData" :chart-options="chartOptions" />
        </div>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-6 h-96">
        <h3 class="text-lg font-semibold text-white mb-4">Webhook Success/Failure</h3>
        <div class="h-80">
          <DoughnutChart :chart-data="webhooksData" :chart-options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>
