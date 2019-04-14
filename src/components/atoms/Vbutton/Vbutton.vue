<template>
  <button class="btn">{{label}}</button>
</template>

<script>
export default {
  name: "Vbutton",
  props: {
    label: {
      type: String,
      default: "Btn"
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
}
</style>
