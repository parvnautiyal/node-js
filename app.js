const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use(shopRoutes);

app.use(errorRoute.get404);

app.listen(3000);
