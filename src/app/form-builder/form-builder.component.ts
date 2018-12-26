import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  questions: any[];
  constructor(private service: QuestionService) {
    //this.questions = service.getQuestions();
  }

  ngOnInit() {
    this.questions = this.service.questions;
  }

  refresh(){
    this.questions = this.service.questions;
  }

}
