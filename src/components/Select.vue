<template>
  <select>
    <option>{{ noSelectionText }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script>
  export default {
    name: "SelectElem",
    props: {
      noSelectionText: { type: String, default: "Make a Selection"},
      options: { type: Array, required: true }
    }
}
</script>

<style>
</style>
