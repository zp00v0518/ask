<template>
  <section class="reklama">
    <div class="reklama__content">reklama</div>
  </section>
</template>

<script>
export default {
  name: "Reklama",
  created() {}
};
</script>

<style lang="scss" scoped>
.reklama {
  width: 15%;
  border: 1px solid red;
  min-width: 150px;
  position: relative;

  &__content {
    position: sticky;
    top: $header-height;
  }
}
</style>
