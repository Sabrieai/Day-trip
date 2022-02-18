//declarations
require('dotenv').config();
const Express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const cors = require('cors');


// Express Configuration
const app = Express();
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['boogaloo']
}));

//env variables
const PORT = 8080;

//Import Routers
const adventureFormRouter = require('./routes/adventure_form.js');
const adventuresRouter = require('./routes/adventures.js');
const favouritesRouter = require('./routes/favourites.js');
const homepageRouter = require('./routes/homepage.js');
const myReviewsRouter = require('./routes/my_reviews.js');
const reviewsLeftRouter = require('./routes/reviews_left.js');
const reservationRouter = require('./routes/reservation.js');

//Pass routers to express as middleware
app.use('/', homepageRouter);
app.use('/adventures', adventuresRouter);
app.use('/form', adventureFormRouter);
app.use('/favourites', favouritesRouter);
app.use('/myreviews', myReviewsRouter);
app.use('/reviews', reviewsLeftRouter);
app.use('/reservation', reservationRouter);


// Sample GET route
app.get('/api/data', (req, res) => {
  homepage.searchDestination('New York')
    .then((products) => {
      res.json(products);
      // res.render()
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
