<template>
  <div id="app">
    <Vheader></Vheader>
    <main class="app__wrap">
      <Reklama class="reklama__left"></Reklama>
      <section class="app__container">
        <Sidebar></Sidebar>
        <router-view/>
      </section>
      <Reklama class="reklama__right"></Reklama>
    </main>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Organism from "./components/organism";
import Reklama from "./components/moleculs/Reklama";

export default {
  name: "App",
  components: { ...Organism, Reklama }
};
</script>

<style lang="scss" scoped>
.reklama {
  &__left {
    @media (max-width: 700px) {
      display: none;
    }
  }
}
</style>

<style lang="scss">
@import "./assets/style/app.scss";
#app {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 45px);
  flex-grow: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app__wrap {
  flex-grow: 4;
  display: flex;
}
.app__container {
  flex-grow: 5;
  display: flex;
  height: 200vh;
}
</style>
