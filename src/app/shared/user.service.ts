import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable()
export class UserService {

    constructor(private readonly http: HttpClient, private readonly afs: AngularFirestore) {
    }

    async addUser(collection: string, doc: number, payload: any): Promise<void> {
        return await this.afs.collection(collection).doc(doc.toString()).set(payload);
    }

    async getUsers(collection: string): Promise<Observable<any>> {
        return this.afs.collection(collection).valueChanges()
    }

    getFromDbByCollection(collection: string, doc: string): Observable<any> {
        return this.afs.collection(collection).doc(doc).valueChanges();
    }

    getFile(filePath: string): Observable<any> {
        return this.http.get(filePath);
    }

    async addAdminUser(collection: string, doc: string, payload: any): Promise<void> {
        return await this.afs.collection(collection).doc(doc).set(payload);
    }

    async getAdminUser(collection: string, doc: string): Promise<Observable<any>> {
        return this.afs.collection(collection).doc(doc).valueChanges();
    }

    async getAdminUsers(collection: string): Promise<Observable<any>> {
        return this.afs.collection(collection).valueChanges()
    }

    async deleteUser(contact: any): Promise<void> {
        return this.afs.collection('users').doc(contact.toString()).delete();
    }
}
