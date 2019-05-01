<template>
  <button :style="{backgroundColor: bgColor}" class="btn">{{label}}</button>
</template>

<script>
export default {
  name: "Vbutton",
  props: {
    label: {
      type: String,
      default: "Btn"
    },
    bgColor: {
      type: String,
      default: 'blue'
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 5px;
  width: 50px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
