<script>
import { mapActions, mapState } from 'pinia'
import CardDetails from '../components/CardDetails.vue'
import {useAppStore} from "../stores/app"
export default {
    components : {
        CardDetails
    },
    computed : {
        ...mapState(useAppStore, ['patients'])
    },
    methods : {
        ...mapActions(useAppStore, ['patientById'])
    },
    created(){
        this.patientById(this.$route.params.id)
    }
}
</script>

<template>
<div class="p-4">
    <h2>Patient Details</h2>
    <CardDetails />

</div>
</template>