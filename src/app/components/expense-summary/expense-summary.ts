import { CurrencyPipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-expense-summary',
  imports: [CurrencyPipe],
  templateUrl: './expense-summary.html',
  styleUrl: './expense-summary.css',
})
export class ExpenseSummary {
  amount: InputSignal<number> = input.required<number>()

}
