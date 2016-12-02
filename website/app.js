const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + '/public');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const data = require("./data");
const users = data.user;


const configRoutes = require("./routes");

const exphbs = require('express-handlebars');

const Handlebars = require('handlebars');

const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            console.log(obj.data.root.modelData);
            return JSON.stringify(obj.data.root.modelData);
            // if (typeof spacing === "number")
            //     return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
        
            // return new Handlebars.SafeString(JSON.stringify(obj));
        }
    },
     partialsDir: [
        'views/partials/'
    ]
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    // If the user posts to the server with a property called _method, rewrite the request's method
    // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
    // rewritten in this middleware to a PUT route
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
};


app.use(passport.initialize());

passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
        console.log("pssport");
        console.log(email);
        console.log(password);
        users.checkLogin(email,password).then((user)=>{
            console.log("pssport pass");
            return done(null,user);
        }).catch((err)=>{
            console.log("pssport false");
            return done(null, false, { message: err });
        });
    }
));




passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


// app.use(session({
//   secret: 'PetPar',
//   cookie: { maxAge: 60 * 1000 * 30}
// }));


app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});