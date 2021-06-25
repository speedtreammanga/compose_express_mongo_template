const config = {
    database: {
        MONGO_DB_URI: process.env.MONGO_DB_URI,
        MONGO_DB_MAIN: process.env.MONGO_DB_MAIN,
        MONGO_DB_USERNAME: process.env.MONGO_ROOT_USERNAME,
        MONGO_DB_PASSWORD: process.env.MONGO_ROOT_PASSWORD
    },
    session: {
        secret: process.env.NODE_SESSION_SECRET
    },
    node: {
        port: process.env.NODE_PORT,
        secret: process.env.NODE_SECRET
    }
}

export default config



