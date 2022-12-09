<script setup>
import CurrentBalance from "@/components/DashboardInfo/CurrentBalance.vue";
import SummaryGraph from "@/components/DashboardInfo/SummaryGraph.vue";
</script>

<template>
  <div class="dashboard-info">
    <CurrentBalance class="current-balance"></CurrentBalance>
    <SummaryGraph></SummaryGraph>
  </div>
</template>

<style>
.dashboard-info{
  display: flex;
  justify-content: space-between;
}
.current-balance{
  margin-right: 32px;
}
.big-block-grey{
  width: 100%;
  background-color: var(--main-grey-background);
  height: 336px;
  border-radius: 16px;
  padding: 32px;
}
.dashboard-block-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.dashboard-block-title-icon{
  cursor: pointer;
}
.dashboard-block-title-icon:hover{
  transform: rotate(90deg);
  transition: transform 0.3s;
  filter: brightness(0) saturate(100%) invert(51%) sepia(91%) saturate(6457%) hue-rotate(245deg) brightness(97%) contrast(103%);
}
.dashboard-block-title-icon:active{
  transform: rotate(90deg) scale(1.5);
  transition: transform 0.1s;
}

@media only screen and (max-width: 850px) {
  .current-balance{
    margin-right: 0;
  }
}
</style>