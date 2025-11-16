import { Component, output, OutputEmitterRef, signal, Signal } from '@angular/core';
import { Category } from '../../types/category';
import { expenseCategories } from '../../mocks/categories';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Expense } from '../../types/expense';

interface ExpenseFormModel {
  amount: FormControl<number>;
  date: FormControl<string>;
  category: FormControl<string>;
  title: FormControl<string>;
}

@Component({
  selector: 'app-expense-form',
  imports: [ReactiveFormsModule],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css',
})
export class ExpenseForm {

  addExpense: OutputEmitterRef<Expense> = output();

  expenseForm: FormGroup<ExpenseFormModel> = new FormGroup<ExpenseFormModel>({
    title: new FormControl<string >('', { nonNullable: true, validators: [Validators.required] }),
    amount: new FormControl<number >(0, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
    date: new FormControl<string >('', { nonNullable: true, validators: [Validators.required] }),
    category: new FormControl<string >('', { nonNullable: true, validators: [Validators.required] }),
  });
  categories: Signal<Category[]> = signal(expenseCategories)



  onAddExpense(expense: Omit<Expense, 'id'>): void {
    const newExpense: Expense = {
      ...expense,
      id: 'exp-' + Math.random().toString(36).substring(2, 9),
    }
    this.addExpense.emit(newExpense)
  }

}
