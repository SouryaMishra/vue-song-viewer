module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "app",
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASS || "p@$$w0rd",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./app.sqlite",
    },
  },
};
