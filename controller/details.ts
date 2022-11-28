import { JsonController, Post, Res, QueryParam, Body, Params } from 'routing-controllers';
import { userDetilsSchema } from '../schema/details';
import { ReferenceSchema } from '../schema/reference';
import 'reflect-metadata';

@JsonController('/details')
export default class UserDetails {

    @Post('/')
    addOrUpdateUser(@QueryParam('data') query: any, @Body() dataObj:any, @Params() params:any) {
        console.log('query', query);
        console.log('dataObj', dataObj);
        console.log('params', params);

        return userDetilsSchema.find();
    }
}