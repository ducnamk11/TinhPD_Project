import  express  from 'express';
import configViewengine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//set up view engien
configViewengine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})