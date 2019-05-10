<template>
  <button class="btn">{{label}}</button>
</template>

<script>
export default {
  name: "Vbutton",
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  border-radius: 4px;
  margin: 5px;
}
</style>
