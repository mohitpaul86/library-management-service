import {Component, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {Observable} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    constructor(private http: HttpClient, private readonly userService: UserService, private readonly messageService: MessageService) {
    }


    AddUserForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        contact: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        address: new FormControl('', Validators.required)
    })

    saveNewUser() {
        this.userService.addUser("users", this.AddUserForm.value.contact!!, this.AddUserForm.value).then(() => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Successfully Added.'});
        })
    }


// Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
        {field: 'studentId'},
        {field: 'firstName'},
        {field: 'lastName'},
        {field: 'dateOfBirth'},
        {field: 'emailId'},
        {field: 'contact'},
        {field: 'Address'},
    ];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };

    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;

    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


    // Example load data from server
    onGridReady(params: GridReadyEvent) {
        this.rowData$ = this.http
            .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    }

    // Example of consuming Grid Event
    onCellClicked(e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }

    // Example using Grid's API
    clearSelection(): void {
        this.agGrid.api.deselectAll();
    }


}
