const debugRoutes = require("./debug");
const homeRoutes = require("./home");
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const express = require('express');


const constructorMethod = (app) => {
    app.use("/debug", debugRoutes);
    app.use("/home", homeRoutes);
    app.use("/register",registerRoutes);
    app.use("/login",loginRoutes);
};

module.exports = constructorMethod;