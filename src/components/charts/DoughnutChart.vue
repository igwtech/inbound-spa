<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, type ChartData } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

defineProps({
    chartData: {
        type: Object as () => ChartData<'doughnut'>,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => { }
    }
})
</script>

<template>
    <Doughnut :data="chartData" :options="chartOptions" />
</template>
