<script setup>
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

const chartData = {
  labels: ['', '', '', '17 May', '', '', ''],
  datasets: [{
    label: 'This month',
    backgroundColor: '#7445FB',
    borderColor: '#7445FB',
    data: [0, 10, 12, 21, 16, 26, 25],
    tension: 0.4,
  },
    {
      label: 'Last month',
      backgroundColor: '#9896A1',
      borderDash: [6, 6],
      data: [0, 12, 15, 10, 4, 15, 10],
      tension: 0.4,
    }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0
    }
  },
  plugins: {
    legend: {
      labels: {
        borderWidth: 0,
        boxWidth: 10,
        boxHeight: 10,
        color: '#9896A1',
        usePointStyle: true,
        pointStyle: 'circle',
      },
      borderRadius: '50px',
      position: "bottom",
      align: 'start'
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        width: 0,
      }
    },
    y: {
      grid:{
        tickLength: 0,
        drawOnChartArea: true,
      },
      border: {
        dash: [3, 10],
        width: 0
      }
    }
  }
}

</script>

<template>
  <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<style>

</style>