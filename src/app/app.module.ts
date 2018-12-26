import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { PreviewComponent } from './preview/preview.component';
import { ToolsComponent } from './tools/tools.component';
import { BenchComponent } from './bench/bench.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
const appRoutes: Routes = [
  { path: 'preview', component: PreviewComponent },
  { path: 'formbuilder',      component: FormBuilderComponent },
  { path: '',
    redirectTo: '/formbuilder',
    pathMatch: 'full'
  },
  { path: '**', component: FormBuilderComponent }
];
@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  ) ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, PreviewComponent, BenchComponent, ToolsComponent, FormBuilderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
