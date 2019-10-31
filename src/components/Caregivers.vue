<template>
  <div v-if="this.caregiver">
    <h4>Caregiver</h4>
    <div>
      <label>Name: </label> {{this.caregiver.name}}
    </div>
    <div>
      <label>Gender: </label> {{this.caregiver.gender}}
    </div>
    <div>
      <label>Address: </label> {{this.caregiver.address}}
    </div>
    <div>
      <label>Birth Date: </label> {{this.caregiver.birthDate}}
    </div>
    <span class="button is-small btn-danger" v-on:click="deleteCaregiver()">Delete</span>
  </div>
  <div v-else>
        <router-link class="btn btn-primary" to="/caregiver/add">Add Caregivers</router-link>
      <br/>
        <router-view/>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "caregiver",
  props: ["caregiver"],
  methods: {
    /* eslint-disable no-console */
    updateActive() {
      var data = {
        id: this.caregiver.caregiver_id,
        name: this.caregiver.caregiver_name,
        gender: this.caregiver.gender,
      };

      http
        .put("/caregiver" + this.caregiver.id, data)
        .then(response => {
          this.caregiver.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCaregiver() {
      http
        .delete("/caregiver" + this.caregiver.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>