import { createApp, ref, h } from "vue";

createApp({
  setup() {
    // 详见 https://cn.vuejs.org/api/composition-api-setup.html#usage-with-render-functions
    const message = ref('Hello App 1');
    return () => h("div", message.value);
  },
}).mount("#app");
