import express, { response } from 'express'
import initialize from './app/app.js';



const app = express();

const port = 5000;

initialize(app);

//app.get('/',(request, response) => response.send('Hellow world'));

app.listen(port, ()=> console.log(`server is listening at port ${port}`));