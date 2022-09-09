module.exports = app => {

    const incidentReports = require("../controllers/incidentreportcontroller.js");
    var router = require("express").Router();
    
    router.post("/", incidentReports.create);
   
    router.get("/", incidentReports.findAll);

    app.use('/api/incident-reports', router);

  };