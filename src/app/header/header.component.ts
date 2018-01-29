import { Component, OnInit } from "@angular/core";
import { IMyDpOptions } from 'mydatepicker';
import {FormGroup, FormBuilder, Validators,FormsModule} from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: "header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})

export class HeaderComponent {
    
    public myInput;
}