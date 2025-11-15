<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, type ChartData } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

defineProps({
    chartData: {
        type: Object as () => ChartData<'line'>,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => { }
    }
})
</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
