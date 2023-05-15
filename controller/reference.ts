import { Body, Get, JsonController, Put, Res } from "routing-controllers";
import { userDetilsSchema } from "../schema/details";
import { ReferenceSchema } from "../schema/reference";


@JsonController('/user')

export default class ReferenceClass {
    @Get('/')
    getUserByID(@Body() params: any, @Res() response: any) {
        console.log('params', params);

        const data = ReferenceSchema.find({ 'usersId': params.id });

        response.send({});

    }

    @Put('/update')
    updateRefenceTable(@Res() response: any) {

        // const ids = userDetilsSchema.find()
        // console.log('ids', ids)
        return userDetilsSchema.find()
    }
}
