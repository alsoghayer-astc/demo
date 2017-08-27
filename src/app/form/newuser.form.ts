import {Component,Output,EventEmitter} from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder} from '@angular/forms';

@Component({
    selector:'new-user-form',
    template:`
    <button (click)="addNewName()" md-raised-button color="primary">Add Lang</button>
    <div [formGroup]="form">
        <ng-container formArrayName="names">
            <div *ngFor="let name of form.controls['names'].controls; let i=index" [formGroupName]="i">
                <md-input-container>
                    <input mdInput formControlName="lang" placeholder="Language">
                </md-input-container>
                <md-input-container>
                    <input mdInput formControlName="name" placeholder="Name">
                </md-input-container>
                <button (click)="removeName(i)" md-mini-fab>
                    <md-icon>remove_circle_outline</md-icon>
                </button>
            </div>
        </ng-container>
    </div>
    `
})
export class NewUserForm{
    form:FormGroup;
    save = new EventEmitter<any>();
    constructor(private _fb:FormBuilder){}

    ngOnInit(){
        this.form = new FormGroup({
            'names': new FormArray([])
        });
        this.addNewName();
    }
    addNewName(){
        let temp = new FormGroup({
            'name':new FormControl(),
            'lang':new FormControl()
        });
        let arr = this.form.controls['names'] as FormArray;
        arr.push(temp);
    }
    removeName(index){
        (this.form.controls['names'] as FormArray).removeAt(index);
    }
    submit(){
        let value = this.form.value;
        this.save.emit(value);
        this.form.reset();
    }
}