<template>
  <div class="ask">
    <form ref="form" class="ask__form">
      <section class="ask__form__header">
        <h2 class="ask__form__header--title">Задать вопрос</h2>
        <input
          name="header-ask"
          v-model="question.title"
          tabindex="1"
          type="text"
          area-label="задать вопрос"
          placeholder="В чем заключается вопрос"
        >
      </section>
      <section class="ask__form__body">
        <h2 class="ask__form__body--title">Основная часть</h2>
        <textarea name="body-ask" v-model="question.body" cols="30" rows="10" tabindex="2"></textarea>
      </section>
      <Vbutton
        tabindex="2"
        @click.native.prevent="handlerClick"
        class="link-btn"
        :label="'Отправить вопрос'"
      ></Vbutton>
    </form>
  </div>
</template>


<script>
const d = { a: 10, b: 34 };
export default {
  name: "Ask",
  data() {
    return {
      question: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    handlerClick() {
      const form = this.$refs.form;
      const api = new this.$api();
      const data = JSON.stringify(this.question);
      api
        .post("/ask", data)
        .then(response => {
          this.question.title = "";
          this.question.body = "";
          console.log(response.responseText);
        })
        .catch(err => {
          console.log("Ask.vue");
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
