<script setup>

</script>

<template>
  <div class="current-balance big-block-grey">
    <div class="dashboard-block-title">
      <h3>Current Balance</h3>
      <p><img class="dashboard-block-title-icon " alt="dots-horizontal" src="/dots-horizontal.svg"></p>
    </div>
    <div class="balance">
      <h1 class="mb-16 h1-small text-center"><span class="color-grey">$</span>31 421.32</h1>
      <p class="balance__summary-tex text-center"><img alt="arrow-up-green" src="/arrow-up-green.svg" height="18" width="18"> 12% vs last month</p>
    </div>
    <div class="dashboard-balance__buttons">
      <button class="button button-small button-purple mr-8">Quick Invest</button>
      <button class="button button-small">Show Report</button>
    </div>
  </div>
</template>

<style scoped>
.balance__summary-text{
  font-size: 18px;
  color: var(--main-green-color);
  display: flex;
  align-items: center;
}
.dashboard-balance__buttons{
  position: absolute;
  bottom: 32px;
}
@media only screen and (max-width: 400px) {
  .h1-small{
    font-size: 38px;
  }
  .button-small{
    padding: 12px 8px;
  }
  .text-center{
    text-align: center;
  }
  .dashboard-balance__buttons{
    position: static;
    display: flex;
    justify-content: center;
    margin-top: 55px;
  }
}
</style>