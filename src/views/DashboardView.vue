<script setup>
  import SearchMenu from "../components/DashboardMenu/SearchMenu.vue"
  import DashboardInfo from "@/components/DashboardInfo/DashboardInfo.vue";
  import SummaryList from "@/components/DashboardCrypto/SummaryList.vue";
  import CryptoList from "@/components/DashboardCrypto/CryptoList.vue";
  import {onMounted, reactive, ref} from "vue";
  import SummaryGraph from "@/components/DashboardInfo/SummaryGraph.vue";
  import axios from "axios";
  const apiLink = "http://localhost:3000/"

  let data = ref(null)
  const getData = async () => {
    await axios(apiLink)
        .then(function (response) {
          data.value = response.data
        })
  }
  onMounted(() => getData())

  let chooseTable = ref("Summary")
</script>

<template>
  <div class="dashboard">
    <SearchMenu class="mb-32"></SearchMenu>
    <DashboardInfo class="mb-32"></DashboardInfo>
    <div class="crypto">
      <SummaryList v-model="chooseTable" class="mb-32"></SummaryList>
      <CryptoList v-if="chooseTable === 'Summary'" class="mb-8" v-for="product in data" :product="product" key="product.id"></CryptoList>
      <div class="cos">
        <div class="blur">
        </div>
      </div>
    </div>
    <SummaryGraph class="summary-graph-small mb-40"></SummaryGraph>
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
.cos{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.blur{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  background: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #F7F7F9 100%);
}

@media only screen and (max-width: 570px) {
  .dashboard{
    margin: 20px 20px 0 20px;
  }
}
</style>