
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserService } from './userService';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

    // config
    token: string = '';
    domain: string = 'http://mpoint.vn/';

    // define
    constructor(
        private http: Http,
        private user: UserService

    ) {
        this.token = this.user.getUserInfo().token;
    }


    // call api
    login(username, password) {
        let url = `${this.domain}apiShop/authenShop/loginShop`;
        let data = { username, password };
        let payload = this.post(url, data, null);
        payload.then(rs => {
            let res: any = rs;
            if (res.err == 0) {
                this.token = res.token;
            }
        })
        return payload;
    }
    refreshToken(refreshToken) {
        let url = `${this.domain}apiShop/authenShop/refreshTokenShop`;

        let payload = this.post(url, { refreshToken }, null);
        payload.then(rs => {
            let res: any = rs;
            if (res.err == 0) {
                this.token = res.token;
            }
        })
        return payload;
    }

    // request
    get(url) {
        return new Promise((resolve, reject) => {
            this.http.get(url).map(rs => rs.json()).subscribe(data => {
                if (data) resolve(data); else reject({ err: 1, msg: 'err' });
            })
        })
    }
    post(url, data, token) {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return new Promise((resolve, reject) => {
            this.http.post(
                url,
                data,
                options
            ).map(res => res.json()).subscribe(data => {
                if (data) resolve(data); else reject({ err: 1, msg: 'err' });
            })
        })
    }
}
