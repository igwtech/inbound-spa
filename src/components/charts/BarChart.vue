<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, type ChartData } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineProps({
    chartData: {
        type: Object as () => ChartData<'bar'>,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => { }
    }
})
</script>

<template>
    <Bar :data="chartData" :options="chartOptions" />
</template>
