import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {


    constructor(private readonly http: HttpClient, private readonly afs: AngularFirestore) {
    }

    async getLoginState(): Promise<Observable<any>> {
        return this.afs.collection('login').doc('loginState').valueChanges();
    }

    async setLoginState(state: boolean) {
        return  this.afs.collection('login').doc('loginState').set({"isLogin": state});
    }
}
