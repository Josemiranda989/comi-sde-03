module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('countries', [
            { name: 'Argentina', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Brazil', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Canada', createdAt: new Date(), updatedAt: new Date() },
            { name: 'France', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Germany', createdAt: new Date(), updatedAt: new Date() },
            { name: 'India', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Italy', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Japan', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Mexico', createdAt: new Date(), updatedAt: new Date() },
            { name: 'United States', createdAt: new Date(), updatedAt: new Date() }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        // Eliminar todos los países al hacer un rollback
        await queryInterface.bulkDelete('countries', null, {});
    }
};