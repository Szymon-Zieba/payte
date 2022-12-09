<script>

</script>

<template>
  <div class="search">
    <p class="search-icon"><img alt="magnify" src="/Icon.svg" height="12" width="12"></p>
    <input class="search-text" placeholder="Search">
  </div>
</template>

<style scoped>
.search{
  background-color: var(--main-grey-background);
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
}
.search-icon{
  display: flex;
  align-items: center;
}
.search-text{
  margin-left: 10px;
  color: var(--main-grey-color);
}
.search-text:focus{
  color: var(--main-black-color);
}
@media only screen and (max-width: 570px) {
  .search{
    width: 50%;
    min-width: 100px;
  }
}
</style>
