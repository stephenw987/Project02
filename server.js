// Module 15 - Project 2: Note Taker Application - Server Definition

// Initialize Server:
// Dev Start: npm run devstart

// Requires Node Modules
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const connect = require("connect");
const connect = require("connect-session-sequelize")(session.Store);
const bcrypt = require("bcrypt");
// const SequelizeStore = require("connect-session-sequelize")(
//   connect.session.Store
// );
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");

// Requires App-specific Modules
const appRoutes = require("./controllers/index.js");
// const appRoutes = require("./controllers");

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();
// const app = session();

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Defines Global App Variables
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// Defines Handlebars to View engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Defines Database (JSON) and Static Page Management
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/public")));

// app.use(session.json());
// app.use(express.static("public"));

// Requires App Routes
app.use(appRoutes);

// Utilizes Sequelize to synchronize Databasee and Initializes Server on Port, PORT
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Note Taker Server is active on Port ${PORT}.`)
  );
});
