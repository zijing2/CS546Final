const debugRoutes = require("./debug");
const homeRoutes = require("./home");
const loginRoutes = require("./login");
const adminRoutes = require("./admin");
const registerRoutes = require("./register");
const processRoutes = require("./process");
const orderRoutes = require("./order");
const accountRoutes = require("./account");


const constructorMethod = (app) => {
    app.use("/debug", debugRoutes);
    app.use("/", homeRoutes);
    app.use("/admin", adminRoutes);
    app.use("/login", loginRoutes);
    app.use("/register", registerRoutes);
    app.use("/process", processRoutes);
    app.use("/order", orderRoutes);
    app.use("/account", accountRoutes);
};

module.exports = constructorMethod;