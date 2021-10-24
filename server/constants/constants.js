module.exports = {
    PORT: 4000,
    REGEX_EMAIL: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"),
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'TEXT',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'TEXT2',
    AUTHORIZATION: 'Authorization'
}