import { Injectable } from '@angular/core';
import { User } from './models/user';
@Injectable()
export class UserService {
    user: User = {
        name: 'tung',
        avatar: 'assets/img/avatar.png',
        birth: new Date(),
        phone: '0961105256',
        email: 'tungdo@neonstudio.us'
    };
    getUserInfo(): User {
        return this.user;
    }
}
