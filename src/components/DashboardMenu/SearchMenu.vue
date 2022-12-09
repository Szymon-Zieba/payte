<script setup>
import SearchInput from "./SearchInput.vue"
import MenuBlock from "./MenuBlock.vue"
import NotificationBlock from "./NotificationBlock.vue"
</script>

<template>
  <div class="dashboard-header">
    <SearchInput></SearchInput>
    <div class="dashboard-header-right">
      <NotificationBlock></NotificationBlock>
      <MenuBlock class="dashboard-header-right__menu"></MenuBlock>
    </div>
  </div>
</template>

<style>
.dashboard-header{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.dashboard-header-right{
  display: flex;
  justify-content: space-between;
}
.dashboard-header-right__menu{
  margin-left: 16px;
}
.grey-block__icon-center{
  height: 48px;
  width: 48px;
  background-color: var(--main-grey-background);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.grey-block__icon-center:hover{
  opacity: 60%;
  background-color: var(--main-dark-grey-color);
}
.red-alert{
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: var(--main-red-color);
  position: absolute;
  top: 0;
  right: 0;
}
</style>
