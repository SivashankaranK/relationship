import { JsonController, Post, Req, QueryParam, Body, Get, Res, Delete, Patch } from 'routing-controllers';
import { userDetilsSchema } from '../schema/details';
import { ReferenceSchema } from '../schema/reference';
import 'reflect-metadata';

import { validationResult } from 'express-validator';
import { apiValidator } from '../validator/apiParams';

@JsonController('/details')
export default class UserDetails {

    @Post('/')
    createUser(@Body() dataObj: any, @Res() response: any) {

        const bodyParamsList = ['name', 'age', 'role', 'number', 'dob'];

        const missingProps = apiValidator({ fields: bodyParamsList, params: dataObj });
        if (missingProps) {
            console.log('inside error');
            response.send(400, `${missingProps} Props are missing`)
        } else {
            const addData = new userDetilsSchema(dataObj)
            return addData.save();
        }
    }

    @Get('/')
    getUser(@Body() dataObj: any,) {
        return userDetilsSchema.find(dataObj);
    }

    @Patch('/')
    UpdateUser(@QueryParam('data') query: any, @Body() dataObj: any) {
        console.log('query', query);
        console.log('dataObj', dataObj);

        return userDetilsSchema.find();
    }

    @Delete('/')
    public async DeleteUser(@Body() dataObj: any, @Res() response: any) {
        if (dataObj.deleteEvery) {
            return userDetilsSchema.deleteMany({ name: dataObj.name });
        }
        const data = await userDetilsSchema.findById(dataObj.id).exec();
        console.log('data', data);
        // return data
        return response.json(data);
        // return userDetilsSchema.deleteOne({ name: dataObj.name });
        // return { response: data };
    }
}