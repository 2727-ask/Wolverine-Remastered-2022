<template>
    <div class="uk-container" style="margin-top:10vh">
        <img class="uk-border-circle uk-align-center" :src="avatar_url" width="120" height="120" alt="Avatar" />
        <h1 class="heading" style="text-align:center">{{userName}}</h1>

        <h4 class="" style="text-align:center">Powered By © Codeo Softwares Pvt Ltd</h4>
        <h6 style="text-align:center">Last Updated: 9 Aug 2023 | Ashutosh Kumbhar</h6>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                avatar_url: null,
                userName: null
            }
        },
        mounted() {
            this.avatar_url = `https://avatars.dicebear.com/api/initials/:PD.svg`;
            //this.userName = this.$store.state.auth.userName;
            this.userName = "Pawanaai Diagnostic Center";
        },
    }
</script>
<style scoped>
    .heading {
        background: #391BCF;
        background: -webkit-linear-gradient(to right, #391BCF 0%, #CF2EA4 77%);
        background: -moz-linear-gradient(to right, #391BCF 0%, #CF2EA4 77%);
        background: linear-gradient(to right, #391BCF 0%, #CF2EA4 77%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;

    }
</style>