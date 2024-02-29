import { createApp, ref, h } from "vue";

createApp({
  setup() {
    const message = ref('Hello App 1');
    return () => h("div", message.value);
  },
}).mount("#app");
