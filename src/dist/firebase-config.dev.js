"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _app = require("firebase/app");

var _firestore = require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCT7V4vXYC4w5r0HsI0BBQ-qw2m694kbBs",
  authDomain: "restaurant-web-app-frontend.firebaseapp.com",
  projectId: "restaurant-web-app-frontend",
  storageBucket: "restaurant-web-app-frontend.appspot.com",
  messagingSenderId: "30387721301",
  appId: "1:30387721301:web:f71a9f09cefc662d6e30dc",
  measurementId: "G-D9P0TS45XV"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;