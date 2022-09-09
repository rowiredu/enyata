const IncidentReport = require("../models/").IncidentReport;
const helpers = require('../helpers.js');

exports.create = (req, res) => {

    helpers.fetchWeatherReport().then( (weatherReport) => {

        console.log(weatherReport)

        const incidentReport = {
            client_id: req.body.client_id,
            incident_desc: req.body.incident_desc,
            city: req.body.city,
            country: req.body.country,
            weather_report: weatherReport
        };

        IncidentReport.create(incidentReport)
        .then(data => {

            res.send(data);

        })
        .catch(err => {

            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Incident report."
            });

        });
        
    });

  
};

exports.findAll = (req, res) => {

    IncidentReport.findAll()
    .then(data => {

      res.send(data);

    })
    .catch(err => {

      res.status(500).send({

        message:
          err.message || "Some error occurred while retrieving tutorials."

      });

    });
};