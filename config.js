const config = {
    db: {
        // host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_NAME,
        host: "trademe-db.cgck3m3yvpq9.eu-west-1.rds.amazonaws.com",
        port: 5432,
        user: "trademe",
        password: "LyLdveKb0cN7ZCDkfe0k",
        database: "trademe_db",
    },
    listPerPage: 10,
};
module.exports = config;