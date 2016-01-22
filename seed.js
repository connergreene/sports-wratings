/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Article = Promise.promisifyAll(mongoose.model('Article'));
var Sport = Promise.promisifyAll(mongoose.model('Sport'));
var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        },
        {
            email: 'csg1922@gmail.com',
            password: 'hi',
            isWriter: true
        }

    ];

    return User.createAsync(users);

};

var seedArticles = function() {
  
  var userId;

  var articles = [{
    content: 'Lebron James will score 23 and the cavs will lose by 4.', 
    title: 'Cavs lose', 
    date: new Date(2016, 07, 28, 8, 17, 0), 
  }]; 

  
  return User.findOneAsync({
    email: 'obama@gmail.com'
  })
  .then(function(user) {
        console.log("seedArticles")
      return user._id; 
    })
  .then(function(userId) {
        console.log("happening", userId)
        articles.forEach(function(article) {
            article.user = userId; 
        });
        return Article.createAsync(articles);
    })
    .then(null, console.error.bind(console));

}

var seedSports = function() {
    var sports = [
    {
        name: 'Basketball'
    },
    {
        name: 'Baseball'
    },
    {
        name: 'Hockey'
    },
    {
        name: 'Soccer'
    }
    ]

    return Sport.createAsync(sports);

}

connectToDb.then(function () {

    Sport.findAsync({}).then(function(sports){
            if (sports.length === 0) {
                console.log('seeding Sports');
                return seedSports();
            } 
            else {
                console.log(chalk.magenta('Seems to already be sports data, existing!'));
                process.kill(0);
            }
    }).then(function () {
        console.log(chalk.green('Sport seed successful!'));
    })



    User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            console.log('seeding users');
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('User seed successful!'));
    })
    .then(function(){
    
        return Article.findAsync({})
         .then(function(articles){
            console.log('check2');
            if (articles.length === 0) {
                console.log('seeding articles');
                return seedArticles();
            } 
            else {
                console.log(chalk.magenta('Seems to already be articles data, existing!'));
                process.kill(0);
            }
        })
    })
    .then(function () {
        console.log(chalk.green('Article seed successful!'));
        process.kill(0);
    }).catch(function(err) {
        console.error(err);
        process.kill(1);
    });
   
});
