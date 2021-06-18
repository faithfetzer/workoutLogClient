require('dotenv').config();
const Express = require('express'); //1
const app = Express(); //2
const controllers = require('./controllers');

// app.use(Express.static(__dirname + '/public'))
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));

// app.get('/pies', (req,res) => res.send('ilovepie'));
app.use('/pies', controllers.piecontroller);

app.listen(process.env.PORT, () =>
    console.log(`[Server]: App is listening on ${process.env.PORT}`)); //3

    /*

    1: invoking nodes 'require()' fucntion. specifyin the name of the module we want to import (express)
    
    2: the app variable is actually creating our express application. we grb th express module (part 1) and invoke it
        -unlocks the use of HTTP requests, moddleware functionality, and some other basic application settings
    
    3:starts our server on port 4000 and runs a console log that states that it is running
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env

MVC
MODEL- as in a todo app, we might define what a task is, and that a list is a collection of tesjs
view: will define what the todos and lists look like visually (think frontedn- react)
controller: could define how a user adds a task or marks another as complete- may connect the views add button to the model so that when you click 'add task' th emodel adds a new task
    */