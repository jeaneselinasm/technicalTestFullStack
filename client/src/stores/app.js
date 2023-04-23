import { defineStore } from "pinia";
import axios from "axios";

const server = "http://localhost:3000/patient";

export const useAppStore = defineStore("app", {
  state: () => ({
    patients: [],
  }),
  getters: {},
  actions: {
    async fetchPatient() {
      try {
        const url = `${server}`;
        const { data } = await axios({
          method: "GET",
          url: url,
        });
        console.log(data, "ini data");
        this.patients = data;
      } catch (error) {
        console.log(error, "error fetch patients");
      }
    },
  },
});
