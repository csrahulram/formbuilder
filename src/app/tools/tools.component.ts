import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  questions: string;
  constructor(private service: QuestionService) {
    this.questions = JSON.stringify(this.service.questions);
  }

  onSchemaUpdate($event){
    this.service.questions = JSON.parse($event.target.value)
  }

  ngOnInit() {
  }

}
