import { createApp } from "vue";
import App from "./App.vue";
import i18nPlugin from "./plugins/i18n";

const app = createApp(App);
const messages = {
  en: {
    hello_world: "There are $1 {{PLURAL:$1|apple|apples}} in the basket"
  },
  ml: {
    hello_world: "കുട്ടയിൽ $1 {{PLURAL:$1|ആപ്പിൾ|ആപ്പിളുകൾ}} ഉണ്ട്"
  }
};

app.use(i18nPlugin, {
  locale: "en",
  messages: messages
});
app.mount("#app");
