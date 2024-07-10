import { ref } from "vue";
import { defineStore } from "pinia";
import { SyncData } from "../../src/sync-data";

export const useMainStore = defineStore("main", () => {
  const title = ref("title");

  const loadSyncData = (syncData: SyncData) => {
    title.value = syncData.msg;
  };

  return {
    title,
    loadSyncData,
  };
});
