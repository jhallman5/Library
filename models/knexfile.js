const dbName = 'library'
const connectionString = process.env.db || `postgres://localhost:5432/${dbName}`

module.exports = {
  client: 'pg',
  connection: connectionString,
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
}
