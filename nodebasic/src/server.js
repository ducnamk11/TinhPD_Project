import  express  from 'express';
import configViewengine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();
var morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     console.log('Run into middleware');
//     console.log(req.method);
//     next();
// }) 

//app.use(morgan('combined'))
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//set up view engien
configViewengine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})