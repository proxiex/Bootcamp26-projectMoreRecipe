'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mealType: {
        type: Sequelize.STRING,
        allowNull: false
      },

      dishType: {
        type: Sequelize.STRING,
        allowNull: false
      },
         
      ingredients: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preparations: {
        type: Sequelize.STRING,
        unique: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'user',
          key: 'id',
          as: 'userId',
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('Recipes');
  }
};