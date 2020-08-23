const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const { log } = console;
const cors = require("cors");
const compression = require("compression");
const enforce = require("express-sslify");

const fs= require("fs");

console.log('the initial NODE ENV IS : ', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') dotenv.config({ path: './config.env' });
dotenv.config({ path: "./.env.production" });
dotenv.config({ path: "./.env.development" });

// require('./models/User');
// require('./models/Survey');
// require('./services/passport');

// //Database connect -->
// mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {console.log("successfully connected to MongoDB ATLAS")});
// // <-- Database connect

// data parsing -->
app.use(bodyParser.json());
// app.use(compression()); // apply Gzip for optimizing server requests. 
app.use(bodyParser.urlencoded({ extended: true }));
// 
app.use(cors());
app.set("trust proxy", true);
// <-- data parsing

// //Cookie session -->
// app.use(
  //     cookieSession({
    //         maxAge: 60 * 60 * 24 * 1000,
    //         keys: [keys.cookieKey]
    //     })
    //     );
    // app.use(passport.initialize());
    // app.use(passport.session());
    // <-- cookie session
    
    //Routing -->
    // require('./routes/authRoutes')(app);
    // require('./routes/billingRoutes')(app);
    // require('./routes/surveyRoutes')(app);
    // <-- Routing 
    // if (1>0) {
      // if (process.env.NODE_ENV === 'production') {
        
      //   app.use(enforce.HTTPS({ trustProtoHeader: true }));
        
      // }
      if (process.env.NODE_ENV === "production") {
        log("WOW! I am in production :D ");
        // app.use(compression); // bugReport: heroku conflicts with compression package
        app.use(enforce.HTTPS({ trustProtoHeader: true }));
      } else {
        log("OMG! we are developing :-0 ");
      }

      app.get("/service-worker.js", (req, res) => {
        res.sendFile(
          path.resolve(__dirname, "client", "build", "service-worker.js")
        );
      });

      app.get("/firebase-messaging-sw.js", (req, res) => {
        res.sendFile(
          path.join(__dirname, "client", "build", "firebase-messaging-sw.js")
        );
      });

      app.use(express.static(path.join(__dirname, "client", "build")));
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
      });

      // app.use(express.static(path.join(__dirname, "client", "build")));
      // Express will serve up production assets and files like main.js & main.css
      
        // Express will serve up index.html if route isn't recognized
      // app.get("*", (req, res) => {
      //     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
      //   });
      
        // app.configure("production", () => {
          //     // Express will serve up production assets and files like main.js & main.css
          //     app.use(express.static('client/build'));
          
//     // Express will serve up index.html if route isn't recognized
//     const path = require('path');
//     app.get('*', (req, res) => {
  //         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  //     });
// });
// fs.readFileSync(`${__dirname}/dev-data/data/reviews.json`, "utf-8");
const text = fs.readFileSync(`${__dirname}/shaja.txt`, "utf-8");
log('text is :', text);
log("shaja is : ",process.env.shaja);
log("BAJA is : ",process.env.BAJA);
log("NODE_ENV is : ",process.env.NODE_ENV);
//setup port -->
const port = process.env.PORT || 5000;
// app.listen(PORT);
const server = app.listen(port, (error) => {
  if (error) throw error;
  log(`Express server started on port ${port}...`);
});
// <-- setup port

// Simple one-liner server run:
// Const http = require('http);
// http.createServer(appFunction).listen(3000);

process.on('unhandledRejection', err => {
  log('UNHANDLED REJECTION! 💥 Shutting down...');
  log(err.name, err.message);
  server.close(() => { // close the server right now.
    process.exit(1); // manually shutdown the application.
  });
});

process.on('SIGTERM', () => {
  log('SIGTERM RECEIVED 👋 Shutting down gracefully...');
  server.close(() => { // Allows all the pending request to get processed completely before shutdown.
    log('Process Terminated! 😢');
  });
});
