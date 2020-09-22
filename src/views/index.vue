<template>
  <div>
    <p>
      <button @click="id++">Change ID</button>
    </p>
    <hr />
    <post :id="id" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Post from "../components/post.vue";

export default {
  components: {
    Post,
  },
  setup() {
    const state = reactive({
      id: 1,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
