<template>
  <main :lang="locale">
    <div class="locale-selector">
      <label for="locale">Locale </label>
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
    </div>
    <div class="params">
      <label for="count">Apples </label>
      <input
        id="count"
        v-model="count"
        type="number"
      >
    </div>
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
#app {
  font-family: sans-serif;
  color: #2c3e50;
  padding: 4em;
  margin: auto;
}

.locale-selector {
  float: right;
}
</style>
