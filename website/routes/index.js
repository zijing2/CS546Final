const debugRoutes = require("./debug");
const homeRoutes = require("./home");


const constructorMethod = (app) => {
    app.use("/debug", debugRoutes);
    app.use("/home", homeRoutes);
};

module.exports = constructorMethod;