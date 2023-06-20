import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable()
export class UserService {

    constructor(private readonly http: HttpClient, private readonly afs: AngularFirestore) {
    }

    async addUser(collection: string, doc: string, payload: any): Promise<void> {
        return await this.afs.collection(collection).doc(doc).set(payload);
    }

    getFromDbByCollection(collection: string, doc: string): Observable<any> {
        return this.afs.collection(collection).doc(doc).valueChanges();
    }

    getFile(filePath: string): Observable<any> {
        return this.http.get(filePath);
    }
}
