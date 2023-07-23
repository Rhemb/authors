const express = require('express');
const app = express();
const port = 8000;

//require mongoose config
require('./config/mongoose-config');
app.use(express.json(), express.urlencoded({extended: true}));

//require route
require('./routes/authorRoutes')(app);


app.listen(port, () => console.log(`Listening on port ${port}`));