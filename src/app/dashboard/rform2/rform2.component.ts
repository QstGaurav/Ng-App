import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../Modal/AddUser';

@Component({
  selector: 'app-rform2',
  templateUrl: './rform2.component.html',
  styleUrls: ['./rform2.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgFor],
})
export class Rform2Component implements OnInit {
  reactiveForm!: FormGroup;
  modal!:User;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(),
      gender: new FormControl('gender'),
      email: new FormControl(),
      username: new FormControl(null),
      notes: new FormArray([]),
    });
  }
  get notes(): FormArray {
    return <FormArray>this.reactiveForm.get('notes') ;
  }
  onForm2Submit() {
    this.modal = this.reactiveForm.value;
    console.log(this.modal);
    this.reactiveForm.reset();
    (<FormArray>this.reactiveForm.get('notes')).clear();
  }
  onAddNotes() {
    // const notesForm =  new FormControl(null);
    (<FormArray>this.reactiveForm.get('notes')).push(new FormControl(null));
  }
  onNoteDelete(index: number) {
    (<FormArray>this.reactiveForm.get('notes')).removeAt(index);
  }

}
