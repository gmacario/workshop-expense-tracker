import { Component, computed, effect, signal } from '@angular/core';
import { ExpenseForm } from "./components/expense-form/expense-form";
import { ExpenseList } from "./components/expense-list/expense-list";
import { ExpenseSummary } from "./components/expense-summary/expense-summary";
import { Header } from "./components/header/header";
import { Expense } from './types/expense';
import { expenseList } from './mocks/expenses';

@Component({
  selector: 'app-root',
  imports: [ExpenseForm, ExpenseList, ExpenseSummary, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly expenses = signal<Expense[]>(expenseList);

  protected readonly totalAmount = computed(() => {
    return this.expenses().reduce((sum, expense) => sum + expense.amount, 0);
  });

  constructor() {
    effect(() => {
      console.log('Expenses updated:', this.expenses());
    });
  }


  protected onAddExpense(expense: Expense): void {
    this.expenses.update((currentExpenses) => [expense, ...currentExpenses]);
  }

  protected onDeleteExpense(expenseId: string): void {
    this.expenses.update((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== expenseId)
    );
  }
}
