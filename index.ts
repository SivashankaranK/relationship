import mongoose from 'mongoose';
import { createExpressServer } from 'routing-controllers';

import UserDetails from './controller/details';


mongoose.connect('mongodb://localhost:27017/relationship');

const app = createExpressServer({ controllers: [UserDetails] });

app.listen(3020, () => { console.log('server runnning at port 3020') })