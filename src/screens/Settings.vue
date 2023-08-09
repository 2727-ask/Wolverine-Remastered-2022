<template>
    <div class="uk-container">
        <h2><u>Settings</u></h2>
        <div class="uk-container">
            <table class="uk-table uk-table-justify uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-width-small"><b>Parameter</b></th>
                        <th><b>Location</b></th>
                        <th><b>Actions</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Templates</td>
                        <td v-if="this.temp_loc">{{this.temp_loc}}</td>
                        <td v-else>Not Selected Yet</td>
                        <td><button class="uk-button uk-button-primary" type="button" @click="setTemplateLocation">Select</button></td>
                    </tr>
                    <tr>
                        <td>Reports</td>
                        <td v-if="this.report_loc">{{this.report_loc}}</td>
                        <td v-else>Not Selected Yet</td>
                        <td><button class="uk-button uk-button-primary" type="button" @click="setReportLocation">Select</button></td>
                    </tr>
                </tbody>
            </table>

 
        </div>
    </div>
</template>



<script>
    import { dialog } from "@electron/remote";
    export default {
        data() {
            return {
                temp_loc: null,
                report_loc :null
            }
        },
        mounted() {
            this.getTemplateLoc(),
            this.getReportLoc()
        },
        methods: {
            async setTemplateLocation() {
                console.log(dialog);
                let dir = await dialog.showOpenDialog({
                    properties: ["openDirectory", "promptToCreate", "createDirectory"],
                })
                if (dir) {
                    console.log(dir);
                    localStorage.setItem("template_location", dir.filePaths[0])
                    this.temp_loc = localStorage.getItem("template_location");
                    console.log(this.temp_loc)
                }
            },
            async setReportLocation() {
                console.log(dialog);
                let dir = await dialog.showOpenDialog({
                    properties: ["openDirectory", "promptToCreate", "createDirectory"],
                })
                if (dir) {
                    console.log(dir);
                    localStorage.setItem("report_location", dir.filePaths[0])
                    this.report_loc = localStorage.getItem("report_location");
                    console.log(this.temp_loc)
                }
            },
            getTemplateLoc() {
                this.temp_loc = localStorage.getItem("template_location");
            },
            getReportLoc(){
                this.report_loc = localStorage.getItem("report_location");
            }
        }
    }
</script>