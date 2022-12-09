<script setup>

</script>

<template>
  <div class="crypto-list">
    <div class="row">

      <div class="name flex-item-mid">
        <div class="icon-border flex-item-mid">
          <img alt="bitcoin" src="/Bitcoin.svg">
        </div>
        <div class="flex-column flex-item-mid">
          <span>BTC</span>
          <span class="down-text">Bitcoin</span>
        </div>
      </div>

      <div class="flex-column flex-item-mid margin-top-small">
        <span>Price</span>
        <span class="down-text">$32,323.32</span>
      </div>
      <div class="flex-column flex-item-mid margin-top-small">
        <span>Change</span>
        <div class="flex-row">
          <span class="mr-8 color-green">+ 2.15%</span>
          <img alt="green" src="/exchange-rate-up.svg">
        </div>
      </div>
      <div class="flex-item-mid margin-top-small">
        <img alt="graph" src="/graph.svg">
      </div>
      <div class="buttons margin-top-small">
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
.margin-buttons{
  margin-right: 8px;
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
    display: flex;
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