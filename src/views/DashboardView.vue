<script setup>
  import SearchMenu from "../components/DashboardMenu/SearchMenu.vue"
  import DashboardInfo from "@/components/DashboardInfo/DashboardInfo.vue";
  import SummaryList from "@/components/DashboardCrypto/SummaryList.vue";
  import CryptoList from "@/components/DashboardCrypto/CryptoList.vue";
  import {getData} from "@/api/getData.js"
  import {ref} from "vue";
  import SummaryGraph from "@/components/DashboardInfo/SummaryGraph.vue";

  //const cos = ref(await getData())
</script>

<template>
  <div class="dashboard">
    <SearchMenu class="mb-32"></SearchMenu>
    <DashboardInfo class="mb-32"></DashboardInfo>
    <div class="crypto">
      <SummaryList class="mb-32"></SummaryList>
      <CryptoList class="mb-8" v-for="n in 10" key="n"></CryptoList>
      <div class="blur">
        dsadsa
      </div>
    </div>
    <SummaryGraph class="summary-graph-small"></SummaryGraph>
  </div>
</template>

<style scoped>
.dashboard{
  margin: 49px 68px 0 68px;
}
.crypto{
  padding: 32px;
  background-color: var(--main-grey-background);
  border-radius: 16px;;
  position: relative;
}
.blur{
  position: sticky;
  height: 136px;
  width: 100%;
  background: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #F7F7F9 100%);
}

@media only screen and (max-width: 570px) {
  .dashboard{
    margin: 20px 20px 0 20px;
  }
}
</style>