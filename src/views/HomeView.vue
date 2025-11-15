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
  <div class="p-8 text-white">
    <h1 class="text-4xl font-bold mb-8 text-center">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div class="bg-gray-800 p-6 rounded-lg text-center">
        <h2 class="text-2xl font-bold">Clients</h2>
        <p class="text-5xl font-thin">12</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg text-center">
        <h2 class="text-2xl font-bold">Hubs Connected</h2>
        <p class="text-5xl font-thin">8</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg text-center">
        <h2 class="text-2xl font-bold">Users Active</h2>
        <p class="text-5xl font-thin">25</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg text-center">
        <h2 class="text-2xl font-bold">Uptime</h2>
        <p class="text-5xl font-thin">99.8%</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-gray-800 p-6 rounded-lg h-96">
        <h2 class="text-2xl font-bold mb-4">Posts Processed/Queued/Rejected per Day</h2>
        <BarChart :chart-data="postsData" :chart-options="chartOptions" />
      </div>
      <div class="bg-gray-800 p-6 rounded-lg h-96">
        <h2 class="text-2xl font-bold mb-4">Uptime</h2>
        <LineChart :chart-data="uptimeData" :chart-options="chartOptions" />
      </div>
      <div class="bg-gray-800 p-6 rounded-lg h-96">
        <h2 class="text-2xl font-bold mb-4">Webhook Success/Failure Rates</h2>
        <DoughnutChart :chart-data="webhooksData" :chart-options="chartOptions" />
      </div>
    </div>
  </div>
</template>
