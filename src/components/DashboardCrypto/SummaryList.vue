<script setup>
const props = defineProps({
  modelValue: String
})

const list = ["Summary", "Table", "Charts", "Reporting", "Analysis"]

const emit = defineEmits(['update:chooseTable'])

const changeComponent = (name) => {
  emit("update:modelValue", name)
}
</script>

<template>
  <div class="list">
    <span></span>
    <p v-for="item in list" key="item" @click="changeComponent(item)"  :class="modelValue === item ? 'list-text list-text-current' : 'list-text'">
      {{ item }}
    </p>
    <span> </span>
  </div>
</template>

<style scoped>
.list{
  display: flex;
  border-bottom: 1px solid var(--main-dark-grey-color);
  overflow: auto;
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