<script setup>

</script>

<template>
  <div class="list">
    <p class="list-text">Summary</p>
    <p class="list-text">Table</p>
    <p class="list-text">Charts</p>
    <p class="list-text">Reporting</p>
    <p class="list-text">Analysis</p>
  </div>
</template>

<style scoped>
.list{
  display: flex;
  border-bottom: 1px solid var(--main-dark-grey-color);
}
.list-text{
  font-size: 16px;
  height: 37px;
  margin-right: 24px;
  color: var(--main-grey-color);
  cursor: pointer;
  margin-bottom: 1px;
}
.list-text:hover{
  color: var(--main-black-color);
}
.list-text-current{
  color: var(--main-black-color);
  border-bottom: 3px solid var(--main-purple-color);
}
</style>