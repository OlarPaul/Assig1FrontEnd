<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="caregiver.caregiver_name" name="name">
        </div>
    
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" required v-model="caregiver.adress" name="address">
        </div>

         <div class="form-group">
          <label for="gender">Gender</label>
          <input type="text" class="form-control" id="gender" required v-model="caregiver.gender" name="gender">
        </div>

        <div class="form-group">
          <label for="birthDater">BirthDate</label>
          <input type="text" class="form-control" id="birthDate" required v-model="caregiver.birthDate" name="birthDate">
        </div>
    
        <button v-on:click="saveCaregiver" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCaregiver">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "add-caregiver",
  data() {
    return {
      caregiver: {
        caregiver_id: 0,
        caregiver_name: "",
        gender: "",
        birthDate:"",
        address:""
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveCaregiver() {
      var data = {
        name: this.caregiver.caregiver_name,
        gender: this.caregiver.gender,
        birthDate: this.caregiver.birthDate,
        address: this.caregiver.address,
      };

      http
        .post("/caregiver/add", data)
        .then(response => {
          this.caregiver.caregiver_id = response.data.caregiver_id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newCaregiver() {
      this.submitted = false;
      this.caregiver = {};
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
