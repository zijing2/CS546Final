const debugRoutes = require("./debug");
const homeRoutes = require("./home");
const loginRoutes = require("./login");
const adminRoutes = require("./admin");
const registerRoutes = require("./register");


const constructorMethod = (app) => {
    app.use("/debug", debugRoutes);
    app.use("/", homeRoutes);
    app.use("/admin", adminRoutes);
    app.use("/login", loginRoutes);
    app.use("/register", registerRoutes);
};

module.exports = constructorMethod;