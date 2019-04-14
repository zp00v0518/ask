<template>
  <header class="header">header</header>
</template>

<script>
export default {
  name: "VHeader"
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: $header-height;
  position: fixed;
  top: 0;
  border: 1px solid;
  background-color: white;
  z-index: 99999;
}
</style>
