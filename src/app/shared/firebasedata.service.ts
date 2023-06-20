import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable()
export class FirebaseDataService {

  constructor(private readonly afs: AngularFirestore) {
  }

  isAuthenticated(pin: string): Observable<any> {
    return this.afs.collection('auth').doc(pin).valueChanges();
  }

  updateEditStatus(newState: boolean): any {
    this.afs.collection('auth').doc('state').update({isEditable: newState});
  }

  getCurrentState(): Observable<any> {
    return this.afs.collection('auth').doc('state').valueChanges();
  }
}
