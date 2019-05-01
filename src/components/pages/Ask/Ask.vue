<template>
  <div class="ask">
    <form class="ask__form">
      <section class="ask__form__header">
        <h2 class="ask__form__header--title">Задать вопрос</h2>
        <input  name="header-ask" tabindex='1' type="text" area-label="задать вопрос" placeholder="В чем заключается вопрос">
      </section>
      <section  class="ask__form__body">
        <h2 class="ask__form__body--title">Основная часть</h2>
        <textarea name="body-ask" id="" cols="30" rows="10" tabindex='2'></textarea>
      </section>
      <Vbutton class="link-btn" :label="'Отправить вопрос'"></Vbutton>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ask"
};
</script>

<style lang="scss" scoped>

</style>
