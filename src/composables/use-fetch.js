import { reactive, toRefs, watchEffect } from "vue";

export default getUrl => {
  //#region Reactive References
  const state = reactive({
    isPending: false,
    data: null,
    error: null,
  });
  //#endregion

  //#region Watchers
  watchEffect(() => {
    handleDataFetching();
  });
  //#endregion

  //#region Methods
  async function handleDataFetching() {
    try {
      state.isPending = true;
      state.data = null;
      state.error = null;
      const response = await fetch(getUrl());
      const data = await response.json();
      state.data = data;
    } catch (error) {
      state.error = error;
    } finally {
      state.isPending = false;
    }
  }
  //#endregion

  return {
    ...toRefs(state),
  };
};
