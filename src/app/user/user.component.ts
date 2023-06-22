import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    users: Observable<any> | undefined;

    constructor(
        private http: HttpClient,
        private readonly userService: UserService,
        private readonly messageService: MessageService) {
    }

    ngOnInit() {
        this.userService.getUsers("users").then(users => {
            this.users = users
        });
    }


    AddUserForm = new FormGroup({
        studentId: new FormControl(this.getRandomId()),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        contact: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
        address: new FormControl('', Validators.required)
    })

    saveNewUser() {
        this.userService.addUser("users", this.AddUserForm.value.contact!!, this.AddUserForm.value).then(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'A new user has registered successfully.'
            });
        })
    }

    getRandomId() {
        return Math.floor(Math.random()*90000) + 10000;
    }


}
