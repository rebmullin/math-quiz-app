import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ResultsComponent } from "./results/results.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WelcomeComponent } from "./welcome/welcome.component";
import { QuestionsComponent } from "./questions/questions.component";
import {
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";

const appRoutes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: ":quizId", component: QuestionsComponent },
  { path: "", redirectTo: "welcome", pathMatch: "prefix" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
