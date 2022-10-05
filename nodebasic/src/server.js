import  Express  from "express";
import configViewengine from "./configs/configViewengine";

const app = express()
const port = 3000

configViewengine(app);

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`I'm Tinh`)
  })

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})