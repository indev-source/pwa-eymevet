import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from '../../structures/customer';
@Component({
    selector: 'app-creator-customers',
    templateUrl: './creator-customers.component.html',
    styleUrls: ['./creator-customers.component.scss']
})
export class CreatorCustomersComponent implements OnInit {
    
    public formGroup: FormGroup;
    public customer:ICustomer =  {fullname: '',email:'',phone:0,address:''};

    constructor(private formbuilder: FormBuilder) { }

    ngOnInit() {
       this.buildForm();
    }
    buildForm(){
        this.formGroup = this.formbuilder.group({
            name: ['',[Validators.required]],
            email: ['',[Validators.required]],
            phone: ['',[Validators.required]],
            address: ['',[Validators.required]]
        });
    }

    OnRegister(){
        this.builderCustomerData();
    }
    builderCustomerData(){
        this.customer.fullname = this.formGroup.value.name;
        this.customer.email    = this.formGroup.value.email;
        this.customer.phone    = this.formGroup.value.phone;
        this.customer.address  = this.formGroup.value.address;
    }

}
