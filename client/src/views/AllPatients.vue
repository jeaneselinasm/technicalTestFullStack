<script>
import {mapActions, mapState} from 'pinia'
import {useAppStore} from '../stores/app'
import TableRow from '../components/TableRow.vue'

export default {
    components : {
        TableRow
    },
    methods : {
        ...mapActions(useAppStore, ['fetchPatient'])
    },
    computed : {
        ...mapState(useAppStore, ['patients'])
    },
    created (){
        this.fetchPatient()
    }
}
</script>

<template>
    <section class="p-4" id="patient-section">
          <div class="d-flex justify-content-between flex-wrap border-bottom ">
            <h4>List Patients</h4>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Sex</th>
                <th scope="col">Religion</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">NIK</th>
                <th scope="col">Action</th>
                <th scope="col" width="50px"> </th>
  
              </tr>
            </thead>
            <tbody id="table-patient">
              <TableRow v-for="(patient, i) in patients" :key="patient.id" :patient="patient" :i="i" />
              
            </tbody>
          </table>
        </section>
</template>