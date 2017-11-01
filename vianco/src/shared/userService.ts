import { Injectable } from '@angular/core';
import { User } from './models/user';
@Injectable()
export class UserService {
    user: any = {};
    getUserInfo() {
        return this.user;
    }
    setUserInfo( user){
        this.user = user;
    }
}
