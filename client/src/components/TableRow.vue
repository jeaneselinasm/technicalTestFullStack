<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    props : ['patient', 'i'], 
    methods : {
        ...mapActions(useAppStore, ['patientById']),
        seePatientDetail(id){
            this.patientById(id)
        }
    }
}
</script>

<template>
    <tr>
                <th scope="row">{{i+1}}</th>
                <td>{{patient.name}}</td>
                <td>{{patient.sex}}</td>
                <td>{{patient.religion}}</td>
                <td>{{patient.phone}}</td>
                <td>{{patient.address}}</td>
                <td>{{patient.nik}}</td>
                <td>
                  <a href="/edit-patient" class=""><i class="bi bi-pencil-square"></i></a>
                  <a href="" class="ms-3"><i class="bx bx-trash"></i></a>
                  <a 
                    @click.prevent="seePatientDetail(patient.id)"
                    href="#"  class="ms-3"><i class="bx bxs-user"></i></a>
                </td>
                

              </tr>
</template>