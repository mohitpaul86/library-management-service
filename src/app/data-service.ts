import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DataService {
    private dataSubject = new Subject<string>();
    data$ = this.dataSubject.asObservable();

    sendData(data: string) {
        this.dataSubject.next(data);
    }
}
