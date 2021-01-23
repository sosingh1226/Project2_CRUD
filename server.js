//Dependencies
const express = require('express');
const app = express();
const db = require("./app/models")

// setting up port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('./app/public'));

//routes
require("./app/routes/api-routes")


db.sequelize.sync().then(() => 
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
)

