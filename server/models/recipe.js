module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
      unique: false,
    },
    mealType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dishType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preparations: {
      type: DataTypes.TEXT,
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
    },
  }
  )
  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };
 return Recipe;
};