import { Component, computed, effect, signal } from '@angular/core';
import { Expense } from './types/expense';
import { ExpenseForm } from "./components/expense-form/expense-form";
import { ExpenseList } from "./components/expense-list/expense-list";
import { Header } from "./components/header/header";
import { expenseList } from "./mocks/expenses";

@Component({
  selector: 'app-root',
  imports: [ExpenseForm, /* ExpenseList, */ Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly expenses = signal<Expense[]>(expenseList);

  protected readonly totalAmount = computed(() => {
    return this.expenses().reduce((sum, expense) => sum + expense.amount, 0);
  });

  // expense = signal<Expense>({
  //   amount: 0,
  //   category: 'Category',
  //   date: 'Date',
  //   id: 'id',
  //   title: 'title'
  // })

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
