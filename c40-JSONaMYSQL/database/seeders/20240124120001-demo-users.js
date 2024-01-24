const bcrypt = require('bcryptjs');

// seeders/20240124120001-demo-dragon-ball-characters.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const hashedPassword = await bcrypt.hash('kamehameha', 10); // Hash de ejemplo para 'kamehameha'

        await queryInterface.bulkInsert('users', [
            {
                fullName: 'Goku',
                email: 'goku@example.com',
                password: hashedPassword,
                countryId: 1,
                avatar: 'path/to/goku_avatar.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Vegeta',
                email: 'vegeta@example.com',
                password: hashedPassword,
                countryId: 2,
                avatar: 'path/to/vegeta_avatar.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Piccolo',
                email: 'piccolo@example.com',
                password: hashedPassword,
                countryId: 3,
                avatar: 'path/to/piccolo_avatar.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Agrega más personajes según sea necesario
            // ...
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        // Eliminar todos los personajes al hacer un rollback
        await queryInterface.bulkDelete('users', null, {});
    }
};
