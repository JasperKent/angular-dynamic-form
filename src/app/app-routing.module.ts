import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionOutletComponent } from './question-outlet/question-outlet.component';

const routes: Routes = [
  {path:'question/:definition', component: QuestionOutletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
