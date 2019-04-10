<template>
  <div id="app">
    <Vheader></Vheader>
    <main class="app__wrap">
      <Sidebar></Sidebar>
      <router-view/>
    </main>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Organism from "./components/organism";

export default {
  name: "App",
  components: { ...Organism }
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  min-width: 100vw;
  padding-top: $header-height;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
</style>
