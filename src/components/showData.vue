<template>
  <div>
    <pre>{{ store }}</pre>
  </div>
</template>


<script lang="ts">
import { useAppStore } from "@/store/howToUse";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useAppStore();
    return {
      store,
    };
  },
});
</script>
