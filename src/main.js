import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from 'vue-banana-i18n'

const app = createApp(App);
const messages = {
  en: {
    hello_world: "There are $1 {{PLURAL:$1|apple|apples}} in the basket",
    welcome: "Welcome"
  },
  ml: {
    hello_world: "കുട്ടയിൽ $1 {{PLURAL:$1|ആപ്പിൾ|ആപ്പിളുകൾ}} ഉണ്ട്",
    welcome: "സ്വാഗതം"
  }
};


const i18nPlugin = createI18n({
  locale: "en",
  messages: messages
});
app.use(i18nPlugin);
app.mount("#app");
