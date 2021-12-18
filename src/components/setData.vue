<template>
  <div>
    <button @click="store.age.newyear()">newYear +1</button>
    <button @click="store.count.add(1)">count +1</button>
  </div>
</template>


<script lang="ts">
import { useAppStore } from "@/store/howToUse";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useAppStore();
    return { store };
  },
});
</script>
