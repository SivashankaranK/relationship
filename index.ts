import mongoose from 'mongoose';
import { createExpressServer } from 'routing-controllers';
import bodyParser from 'body-parser'
import UserDetails from './controller/details';
import ReferenceClass from './controller/reference';


mongoose.connect('mongodb://localhost:27017/relationship');

const app = createExpressServer({ controllers: [UserDetails, ReferenceClass] });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3020, () => { console.log('server runnning at port 3020') })