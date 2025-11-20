import { Component, input, InputSignal, output, OutputEmitterRef, Signal, signal } from '@angular/core';
import { Expense } from '../../types/expense';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {}
