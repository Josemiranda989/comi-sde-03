module.exports = (sequelize, DataTypes) => {
    const alias = 'User'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        countryId: {
            type: DataTypes.INTEGER
        },
        avatar: {
            type: DataTypes.STRING
        },
    }
    const config = {
        tableName: 'users',
        paranoid: true
    }

    const User = sequelize.define(alias, columns, config)
    // Aqui va la asociación
    User.associate = (models) => {
        User.belongsTo(models.Country, {
            as: 'country'
        })
    }


    return User
}