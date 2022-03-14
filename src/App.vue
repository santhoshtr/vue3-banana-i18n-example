<template>
  <main :lang="locale">
    <h1>
      {{ i18n.i18n('welcome') }}
    </h1>
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
    <h2 v-i18n:hello_world="[count]" />
  </main>
</template>

<script>
import { inject, ref, watch } from "vue";
import { useI18n } from 'vue-banana-i18n'

export default {
  name: "App",
  setup() {
    const i18n = useI18n();
    const locale = ref("en");
    const count = ref("3");
    const setLocale = inject("setLocale");
    watch(locale, (newLocale) => setLocale(newLocale));
    return {
      i18n,
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
