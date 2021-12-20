module.exports = {
    port: process.env.PORT || 5004,
    url: process.env.URL || "http://localhost",
    secret: process.env.JWT_SECRET || "local development secret"
};