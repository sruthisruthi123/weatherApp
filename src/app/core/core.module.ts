import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirebaseModule } from './firebase.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    FirebaseModule
  ],
  exports : [ ToolbarComponent ]
})
export class CoreModule { }
