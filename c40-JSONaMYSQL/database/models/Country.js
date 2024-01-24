module.exports = (sequelize, DataTypes) => {
    const alias = 'Country'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: 'countries',
        paranoid: true
    }

    const Country = sequelize.define(alias, columns, config)

    // Aqui va la asociación
    Country.associate = (models) => {
        Country.hasMany(models.User, {
            as: 'users'
        })
    }
    return Country
}