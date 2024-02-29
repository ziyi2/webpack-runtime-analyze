import { createApp, ref, h } from "vue";

createApp({
  setup() {
    const message = ref('Hello App 2');
    return () => h("div", message.value);
  },
}).mount("#app");
