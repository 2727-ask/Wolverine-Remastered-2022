<template>
  <div class="uk-button-group uk-flex uk-flex-center">
    <router-link to="/newrecord" class="uk-button uk-button-primary btn">Record</router-link>
    <router-link to="/doctors" class="uk-button uk-button-primary btn">Doctors</router-link>
    <router-link to="/facilities" class="uk-button uk-button-primary btn">Facilities</router-link>
    <router-link to="/payments" class="uk-button uk-button-primary btn">Payments</router-link>
    <router-link to="" class="uk-button uk-button-primary btn">Refresh</router-link>
  </div>
</template>

<style scoped>
.uk-button-group{
  overflow:scroll;
}
.btn{
    margin:20px;
}
</style>
