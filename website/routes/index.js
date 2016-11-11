const homeRoutes = require("./home");

const constructorMethod = (app) => {
    app.use("/home", homeRoutes);
};

module.exports = constructorMethod;