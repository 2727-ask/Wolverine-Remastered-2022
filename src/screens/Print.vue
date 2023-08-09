<template>
    <div class="uk-container" id="printMe">
        <h2 style="text-align:center">Dr. {{this.$route.query.name}} </h2>
        <h3 style="text-align:center;margin-top:0px">Month : {{this.$route.query.month}}  |  Year : {{this.$route.query.year}}  | <a @click="printContent">Print Now</a></h3>
        <hr>
        <table class="uk-table uk-table-small uk-table-divider">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Patient Name</th>
                    <th>Diagnosis Of</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="payment in $store.state.newrecords.paymentRecord"
                :key="payment"
              >
                <td>{{ makeDateReadable(payment.date) }}</td>
                <td>{{ payment.patient_name }}</td>
                <td>{{ payment.facility_name }}</td>
                <td>{{ payment.cut }}</td>
              </tr>
              <tr>
                  <td>Count</td>
                  <td>{{$store.state.newrecords.paymentRecord.length}}</td>
                  <td>Total</td>
                  <td>{{$store.state.newrecords.totalSum}}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import pre from "print-html-element";
    export default {
      data() {
        return {
          data: this.$route.params.date,
        };
      },
      methods: {

        addLeadingZero(value) {
          return value < 10 ? `0${value}` : value;
        },

        makeDateReadable(inputDate) {
        // Create a Date object from the input date
        const dateObj = new Date(inputDate);

  
        // Get the month, day, and year components from the Date object
        const month = this.addLeadingZero(dateObj.getMonth()+1);
        const day = this.addLeadingZero(dateObj.getDate());
        const year = dateObj.getFullYear();

        // Format the date in "Month Day, Year" format
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;

      },
        printContent() {
          pre.printElement(document.getElementById('printMe'));
        },
      },
    };
    </script>