<template>
  <div class="home">
    home
    <router-link to="/questions/ask" class="link-btn">Задать вопрос</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  flex-grow: 5;
  height: 200vh;
}
</style>
