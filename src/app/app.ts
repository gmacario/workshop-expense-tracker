import { Component } from '@angular/core';
import { ExpenseForm } from "./components/expense-form/expense-form";
import { ExpenseList } from "./components/expense-list/expense-list";
import { ExpenseSummary } from "./components/expense-summary/expense-summary";
import { Header } from "./components/header/header";
import { Expense } from './types/expense';

@Component({
  selector: 'app-root',
  imports: [ExpenseForm, ExpenseList, ExpenseSummary, Header],
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
