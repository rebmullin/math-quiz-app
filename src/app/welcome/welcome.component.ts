import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  public quizzes: any;

  constructor(private questionsServices: QuestionsService) {
    this.quizzes = this.questionsServices.getQuizzes();
    this.questionsServices.getQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  ngOnInit() {}
}
