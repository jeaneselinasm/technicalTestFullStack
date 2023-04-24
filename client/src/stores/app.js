import { defineStore } from "pinia";
import axios from "axios";

const server = "http://localhost:3000/patient";

export const useAppStore = defineStore("app", {
  state: () => ({
    patients: [],
    patient: {},
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
    async patientById(id) {
      try {
        console.log(id, "ini id");
        let { data } = await axios({
          method: "get",
          url: `${server}/${id}`,
        });
        console.log(data, "data patient by id");

        this.patient = data;
        this.$router.push(`/patient/${id}`);
      } catch (error) {
        console.log(error, "error patient by id");
      }
    },
  },
});
