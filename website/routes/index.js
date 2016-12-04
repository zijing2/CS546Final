const debugRoutes = require("./debug");
const homeRoutes = require("./home");
const loginRoutes = require("./login");
const adminRoutes = require("./admin");
const registerRoutes = require("./register");
const processRoutes = require("./process");
const orderRoutes = require("./order");
const accountRoutes = require("./account");

const path = require('path');

const constructorMethod = (app) => {
    app.use("/debug", debugRoutes);
    app.use("/", homeRoutes);
    app.use("/admin", adminRoutes);
    app.use("/login", loginRoutes);
    app.use("/register", registerRoutes);
    app.use("/process", processRoutes);
    app.use("/order", orderRoutes);
    app.use("/account", accountRoutes);
   
    app.use("/help",(req, res) => {
        let route = path.resolve(`static/developing.html`);
        res.status(200).sendFile(route);
    });
    app.use("/policy",(req, res) => {
        let route = path.resolve(`static/developing.html`);
        res.status(200).sendFile(route);
    });
    app.use("/privacy",(req, res) => {
        let route = path.resolve(`static/developing.html`);
        res.status(200).sendFile(route);
    });
    app.use("/advertisement",(req, res) => {
        let route = path.resolve(`static/developing.html`);
        res.status(200).sendFile(route);
    });
    app.use("/contactus",(req, res) => {
        let route = path.resolve(`static/developing.html`);
        res.status(200).sendFile(route);
    });

    app.use("*", (req, res) => {
        // any unmatched routes (ie, pages that do not exist) will hit this catch-all route
        // You could also do res.status(num).render(template, data)
        let route = path.resolve(`static/404.html`);
        res.status(200).sendFile(route);
    })
};

module.exports = constructorMethod;