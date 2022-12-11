<script setup>
import {computed} from "vue";
const props = defineProps({
  product: Object
})

const logo = "https://s2.coinmarketcap.com/static/img/coins/64x64/" + props.product.id + ".png"
const graph = "https://s3.coinmarketcap.com/generated/sparklines/web/1d/2781/" + props.product.id + ".svg"

const isPositive = computed(() => {
  return props.product.quote.USD.percent_change_24h > 0
})
</script>

<template>
  <div class="crypto-list">
    <div class="row">
      <div class="name flex-item-mid width20">
        <div class="icon-border flex-item-mid">
          <img alt="bitcoin" :src="logo" height="32" width="32">
        </div>
        <div class="flex-column jc-center flex-item-mid">
          <span>{{product.symbol}}</span>
          <span class="down-text">{{product.name}}</span>
        </div>
      </div>

      <div class="flex-column flex-item-mid margin-top-small jc-center width10">
        <span>Price</span>
        <span class="down-text">${{(product.quote.USD.price).toFixed(2)}}</span>
      </div>
      <div class="flex-column flex-item-mid margin-top-small jc-center width10">
        <span>Change</span>
        <div class="flex-row">
          <span class="mr-8" :class="isPositive ? 'color-green' : 'color-red'">{{(product.quote.USD.percent_change_24h).toFixed(2)}}</span>
          <img alt="green" :src="isPositive ? '/exchange-rate-up.svg' : '/exchange-rate-down.svg'">
        </div>
      </div>
      <div class="flex-item-mid margin-top-small jc-center">
        <img alt="graph"  :class="isPositive ? 'filter-green' : 'filter-red'" :src="graph">
      </div>
      <div class="buttons margin-top-small width20 jc-end">
        <button class="button margin-buttons button-width">Sell</button>
        <button class="button button-purple button-width">Buy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crypto-list{
  background: var(--main-white-color);
  border: 1px solid var(--main-dark-grey-color);
  border-radius: 8px;
  padding: 20px;
}
.row{
  font-size: 14px;
  color: var(--main-grey-color);
  display: flex;
  justify-content: space-between;
}
.name{
  display: flex;
}
.icon-border{
  margin-right: 16px;
  height: 48px;
  width: 48px;
  border: 1px solid var(--main-dark-grey-color);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.down-text{
  font-weight: 600;
  color: var(--main-black-color);
}
.buttons{
  display: flex;
}
.margin-buttons{
  margin-right: 8px;
}

.width30{
  width: 30%;
}
@media only screen and (min-width: 851px) {
  .width10{
    width: 10%;
  }
  .width20{
    width: 20%;
  }
}
@media only screen and (max-width: 850px) {
  .row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80px;
  }
  .flex-item-mid{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons{
    grid-column: 1 / 3;
    justify-content: space-around;
    align-items: center;
  }
  .margin-buttons{
    margin-right: 0;
  }
  .button-width{
    width: 80px;
    height: 50px;
  }
}
@media only screen and (max-width: 450px) {
  .row{
    display: flex;
    flex-direction: column;
  }
  .margin-top-small{
    margin-top: 20px;
  }
}
</style>