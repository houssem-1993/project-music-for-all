
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const UserModel = require('./model/model');

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true })
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

app.use( bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json());

const routes = require('./routes/routes');
const postControls = require('./controllers/postController')
const likeControls = require('./controllers/likeController')
const commentControls= require('./controllers/commentController')
app.use('/', routes);

app.get("/posts/:id",postControls.find)
app.post("/posts",postControls.create)
app.get("posts/all",postControls.all)
app.post("/like",likeControls.create)
app.get('/comment/:id',commentControls.find)
app.post('/comment',commentControls.create)
app.get('comment/all',commentControls.all)

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

app.listen(3000, () => {
  console.log('Server started')
});