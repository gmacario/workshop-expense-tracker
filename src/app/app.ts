import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Expense } from './types/expense';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    // Why we may need this? 
  }

  protected onAddExpense(expense: Expense): void {
    // Do something when the expense is add!
    console.log(expense);
  }

  protected onDeleteExpense(expenseId: string): void {
    // Do something when the expense is removed!
    console.log(expenseId);
  }
}
