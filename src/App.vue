<template>
  <div id="app">
    <Vheader></Vheader>
    <div class="app__wrap">
      <Sidebar></Sidebar>
      <router-view/>
    </div>
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
  padding-top: $header-height;
}
</style>
