require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require('./db');

app.use(Express.json());
app.use(require("./middleware/validate-session"));
const controllers = require('./controllers');
app.use('/user', controllers.userController);
app.use('/log', controllers.logController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(4000, ()=>{
            console.log(`[Server]: App is listening on 4000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });
