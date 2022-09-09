'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IncidentReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IncidentReport.init({
    client_id: DataTypes.INTEGER,
    incident_desc: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    weather_report: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'IncidentReport',
  });
  return IncidentReport;
};