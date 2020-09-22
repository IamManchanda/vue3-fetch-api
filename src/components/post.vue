<template>
  <div v-if="isPending">loading...</div>
  <div v-else-if="data">
    <pre>{{ data }}</pre>
  </div>
  <div v-else-if="error">{{ error }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import useFetch from "../composables/use-fetch.js";

export default {
  name: "Post",
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    //#region Reactive References
    const state = reactive({});
    //#endregion

    //#region Data Fetching
    const { isPending, data, error } = useFetch(
      () => `https://jsonplaceholder.typicode.com/todos/${props.id}`,
    );
    //#endregion

    return {
      ...toRefs(state),
      data,
      error,
      isPending,
    };
  },
};
</script>
