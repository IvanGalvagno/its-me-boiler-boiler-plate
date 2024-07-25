import 'dotenv/config';
export default {
  port: process.env.PORT || 8088,
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME,
    server: process.env.DATABASE_SERVER,
  }
}
