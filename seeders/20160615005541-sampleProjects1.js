'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('destinations', [{
      location: 'Seattle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'Tokyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'Auckland',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'Mumbai',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Tehran',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Cairo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Reyjavik',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Zagreb',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Medellin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      location: 'Chicago',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
