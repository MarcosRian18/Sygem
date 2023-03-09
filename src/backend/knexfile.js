module.exports = {
    client: 'pg',
    connection: {
        host: '172.17.0.1',
        user: 'postgres',
        password: 'postgres',
    },

    migrations: {
        tablename: 'knex_migrations'
    }
}