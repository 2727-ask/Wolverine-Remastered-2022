let PizZip = require('pizzip');
let Docxtemplater = require('docxtemplater');
let fs = require('fs');
class GenerateReport {
    replaceErrors(key, value) {
        if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function (error, key) {
                error[key] = value[key];
                return error;
            }, {});
        }
        return value;
    }
    errorHandler(error) {
        console.log(JSON.stringify({ error: error }, this.replaceErrors));
        if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors.map(function (error) {
                return error.properties.explanation;
            }).join("\n");
            console.log('errorMessages', errorMessages);
        }
        throw error;
    }
    generator(fac, patientName, age, date, gender, doctor) {
        console.log('Generating Report');
        let d = new Date(date);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        const genertatedReportDir = localStorage.getItem("report_location");
        const exactGeneratedReportDir = genertatedReportDir + "/" + year + "/" + month;
        fs.mkdirSync(exactGeneratedReportDir, { recursive: true }, (err) => {
            if (err) throw err;
        });
        let doctor_name = doctor.name;
        let facility_id = fac.id;
        let template_location = localStorage.getItem("template_location") + "/" + `${facility_id}.docx`;
        var content = fs.readFileSync(template_location, 'binary');
        var zip = new PizZip(content);
        console.log(zip,doctor_name);

        try {
            var doc = new Docxtemplater(zip);
        } catch (error) {
            this.errorHandler(error);
        }
        doc.setData({
            patientName: patientName,
            age: age,
            date: date,
            gender: gender,
            ReferedBy: doctor_name
        });
        try {
            doc.render()
        }
        catch (error) {
            this.errorHandler(error);
        }
        var buf = doc.getZip().generate({ type: 'nodebuffer' });
        const tnow = new Date();
        const timeStamp = tnow.getTime();
        fs.writeFileSync(`${exactGeneratedReportDir}/${patientName}${timeStamp}.docx`, buf);
    }
}

export default GenerateReport;