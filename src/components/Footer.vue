<template>
    <footer class="footer">
        <!-- Footer content -->
        Contact for Support {{phone}} (Ashutosh Kumbhar)<br>
        &copy;{{year_launched}} - {{current_year}} | {{company}} | All rights reserved. <br>

    </footer>
</template>

<script>
    export default {
        data() {
            return {
                year_launched: "2022",
                current_year: null,
                company: null,
                phone: "+91 8766934856"
            };
        },

        mounted() {
            this.company = "Codeo Softwares pvt Ltd | Made With ❤️";
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            this.current_year = currentYear;
        }
    }
</script>



<style>
    .content {
        flex: 1;
        padding: 20px;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
</style>