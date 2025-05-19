module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      category: {
        type: DataTypes.ENUM(
          'sports',
          'rare',
          'luxury',
          'bike'
        ),
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true
      },
    });
  
    return Product;
  };
  