import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from '../../structures/customer';
import { CustomerService } from 'app/services/customer.service';
@Component({
    selector: 'app-creator-customers',
    templateUrl: './creator-customers.component.html',
    styleUrls: ['./creator-customers.component.scss']
})
export class CreatorCustomersComponent implements OnInit {
    
    public formGroup: FormGroup;
    public customer:ICustomer =  {fullname: '',email:'',phone:0,address:''};
    public msgSuccessful;

    constructor(private formbuilder: FormBuilder, private customerS:CustomerService) { }

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

    save(){
        this.builderCustomerData();
        this.customerS.add(this.customer).then(result =>{
            console.log("registrado");
            this.buildForm();
        });
    }
    builderCustomerData(){
        this.customer.fullname = this.formGroup.value.name;
        this.customer.email    = this.formGroup.value.email;
        this.customer.phone    = this.formGroup.value.phone;
        this.customer.address  = this.formGroup.value.address;
    }
    cleanCustomerData(){
        this.formGroup.value.name = '';
        this.formGroup.value.email = '';
        this.formGroup.value.phone = '';
        this.formGroup.value.address= '';
    }

}
