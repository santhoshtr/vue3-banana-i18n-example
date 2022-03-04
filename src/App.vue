<template>
  <main :lang="locale">
    <form>
      <label for="locale">Locale</label>
      <select
        id="locale"
        v-model="locale"
      >
        <option value="en">
          English
        </option>
        <option value="ml">
          Malayalam
        </option>
        <option value="he">
          Hebrew
        </option>
      </select>
      <div class="params">
        <label for="count">Apples </label>
        <input
          id="count"
          v-model="count"
          type="number"
        >
      </div>
    </form>
    <h1 v-i18n:hello_world="[count]" />
  </main>
</template>

<script>
import { inject, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const locale = ref("en");
    const count = ref("3");
    const setLocale = inject("setLocale");
    watch(locale, (newLocale) => setLocale(newLocale));
    return {
      locale,
      count,
    };
  },
};
</script>

<style>
main {
 font-family: sans-serif;
  color: #2c3e50;
  margin: 2em auto;
  max-width: 600px;
}

form {
  display: flex;
  flex-direction: row;
}

</style>
