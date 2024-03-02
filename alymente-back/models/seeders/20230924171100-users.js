module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        roleId: 2,
        displayName: 'ademir',
        email: 'admin@admin.com',
        password: 'admin100',
      },
      {
        roleId: 1,
        displayName: 'Michael',
        email: 'michael10@gmail.com',
        password: '12345678',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
