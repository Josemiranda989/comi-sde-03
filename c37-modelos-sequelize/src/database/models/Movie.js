module.exports = (sequelize, DataTypes) => {
    const alias = 'Movie'
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1).UNSIGNED
        },
        release_date: {
            type: DataTypes.DATE
        },
        title: {
            type: DataTypes.STRING(500)
        },
        updated_at: {
            type: DataTypes.DATE
        }
    }
    const config = {
        tableName: 'movies',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}