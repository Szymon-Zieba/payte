<script setup>

</script>

<template>
  <div class="summary-graph big-block-grey">
    <div class="dashboard-block-title">
      <h3>Summary</h3>
      <p class="dashboard-block-title-icon"><img alt="dots-horizontal " src="/dots-horizontal.svg"></p>
    </div>
  </div>
</template>

<style>
.summary-graph{
}
@media only screen and (max-width: 850px) {
  .summary-graph{
    display: none;
  }
}
.summary-graph-small{
  display: none;
  margin-top: 32px;
}
@media only screen and (max-width: 850px) {
  .summary-graph-small{
    display: block;
  }
}
</style>