'use strict';
module.exports = (sequelize, DataTypes) => {
  var destinations = sequelize.define('destinations', {
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return destinations;
};