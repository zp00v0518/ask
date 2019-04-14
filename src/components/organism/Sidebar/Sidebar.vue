<template>
  <nav class="sidebar">
   <ul class="sidebar__list">
     <li v-for="(item, index) in views" :key="index">
       <router-link :to="item.url">{{item.label}}</router-link>
     </li>
   </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data () {
    return {
      views: [
        {label: 'Главная', url:'/'},
        {label: 'Поддержка', url:'/support'}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar{
  width: 20%;
  border: 1px solid green;

  &__list{
    position: sticky;
    top: $header-height;
  }
}
</style>
