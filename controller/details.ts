import { JsonController, Post, Res } from 'routing-controllers';


@JsonController('/details')
export default class UserDetails {

    @Post('/')
    addOrUpdateUser() {
        console.log('update user');
        return 'Inside Update User'
        // Res('Inside Update User');
    }
}