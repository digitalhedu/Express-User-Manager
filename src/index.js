const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const method = require("method-override");
const path = require("path");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", 'ejs');
app.set("views",path.resolve(__dirname,"./views"));

// middleware app
app.use(express.static("../public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(method('_method'));
app.use(cookie());
app.use(session({
    secret: 'express',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// custom middleware
app.use(require("./middlewares/generalStyle"))
app.use(require("./middlewares/titleView"))
app.use(require("./middlewares/userSession"))

// routes
app.listen(app.get('port'),() => console.log("servidor corriendo en el http://localhost:"+app.get('port')))
app.use(require("./routes/main"))
app.use("/user",require("./routes/user"))
