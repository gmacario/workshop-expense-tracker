import { Expense } from "../types/expense";

export const expenseList: Expense[] = [
  {
    id: "exp-001",
    title: "Rent payment",
    amount: 850,
    date: new Date("2025-11-01").toDateString(),
    category: "groceries",
  },
  {
    id: "exp-002",
    title: "Grocery shopping",
    amount: 92.5,
    date: new Date("2025-11-03").toDateString(),
    category: "groceries",
  },
  {
    id: "exp-003",
    title: "Gym membership",
    amount: 39.99,
    date: new Date("2025-11-05").toDateString(),
    category: "health",
  },
  {
    id: "exp-004",
    title: "Netflix subscription",
    amount: 12.99,
    date: new Date("2025-11-06").toDateString(),
    category: "subscriptions",
  },
  {
    id: "exp-005",
    title: "Dinner at restaurant",
    amount: 45.2,
    date: new Date("2025-11-07").toDateString(),
    category: "dining",
  },
  {
    id: "exp-006",
    title: "Electricity bill",
    amount: 68.3,
    date: new Date("2025-11-08").toDateString(),
    category: "utilities",
  },
  {
    id: "exp-007",
    title: "Gas refill",
    amount: 60,
    date: new Date("2025-11-09").toDateString(),
    category: "transportation",
  },
  {
    id: "exp-008",
    title: "Cinema night",
    amount: 14.5,
    date: new Date("2025-11-10").toDateString(),
    category: "entertainment",
  },
  {
    id: "exp-009",
    title: "New sneakers",
    amount: 89.99,
    date: new Date("2025-11-11").toDateString(),
    category: "clothing",
  },
  {
    id: "exp-010",
    title: "ETF investment",
    amount: 200,
    date: new Date("2025-11-12").toDateString(),
    category: "savings",
  },
];