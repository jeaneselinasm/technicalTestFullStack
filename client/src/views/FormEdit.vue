<script>
export default {
   
}
</script>

<template>
    <div class="p-4 mx-4 mt-2" id="addpatient-section">
      <form >
        <div class="d-flex justify-content-between flex-wrap border-bottom">
          <h4>Edit Patient Data</h4>
        </div>

        <!-- INPUT Name -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-name">Name</label>
          <input
            type="text"
            id="patient-name"
            class="form-control"
            autocomplete="off"
            required
            
          />
        </div>

        <!-- INPUT SEX -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-sex">Sex</label>
          <input
            type="text"
            id="patient-sex"
            class="form-control"
            autocomplete="off"
            required
          />
        </div>

         <!-- INPUT RELIGION -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-religion">Religion</label>
          <input
            type="text"
            id="patient-religion"
            class="form-control"
            autocomplete="off"
            required
          />
        </div>

        <!-- INPUT PHONE -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-phone">Phone</label>
          <input
            type="text"
            id="patient-phone"
            class="form-control"
            autocomplete="off"
            required
          />
        </div>

        <!-- INPUT ADDRESS -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-phone">Address</label>
          <textarea
            id="patient-address"
            class="form-control"
            autocomplete="off"
            required
          />
        </div>

        <!-- INPUT NIK -->
        <div class="form-outline my-4">
          <label class="form-label" for="patient-nik">NIK</label>
          <input
            type="text"
            id="patient-nik"
            class="form-control"
            autocomplete="off"
            required
          />
        </div>

        <!-- BUTTON SUBMIT -->
        <div class="container-fluid justify-content-start">
        <a href="">
          <button class="btn btn-danger btn-lg me-2">Cancel</button></a>
          <button class="btn btn-primary btn-lg" type="submit">Add </button>

        </div>
      </form>
    </div>

</template>