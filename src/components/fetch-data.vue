<template>
  <div>Hello World</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "FetchData",
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
