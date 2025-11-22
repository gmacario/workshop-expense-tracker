## 🧭 Angular Signals Workshop — 3-Hour Structure

### 🔵 Overview
This 3-hour workshop guides attendees through Angular Signals by progressively building an Expense Tracker. Each step focuses on one core Signals concept, with increasingly realistic interactions.

**Facilitation note:** For short / not particularly complex exercises, attendees will get 10–15 minutes of hands-on time. For more complex parts, we’ll switch to live coding. The balance between the two will be decided based on the experience level and needs of the group.

---

## 1. Single Expense Signal
**🎯 Goal:** Introduce `signal()`, `set()`, `update()`, and basic reactivity.

### 📝 Description
Start with a basic `signal` representing a single expense object. Update it from a minimal form to show immediate UI updates.

### ✅ Attendee Tasks
- Create a `signal<Expense | null>`.
- Bind form inputs to update the signal.
- Display the current expense.

---

## 2. Multiple Expenses Signal
**🎯 Goal:** Replace single-object state with a list using `signal<Expense[]>`.

### 📝 Description
Turn the previous signal into an array of expenses. Add a function to push new entries.

### ✅ Attendee Tasks
- Create `expenses = signal<Expense[]>([])`.
- Implement `addExpense()` using `update()`.
- Render the list temporarily in the main component.

### 2a. Effect: Log Added Expense
**🎯 Goal:** Introduce `effect()` for side effects.

### 📝 Description
Whenever the `expenses` array changes, log the last added expense.

### ✅ Attendee Tasks
- Add an `effect(() => console.log(...))`.
- Ensure logs reflect only changes, not initial render.

---

## 3. ExpenseList Component
**🎯 Goal:** Show `input()` signals, `@for` block, and `@empty` block.

### 📝 Description
Move the expense list rendering into its own component.

### ✅ Attendee Tasks
- Add `@Input` signal using `input()`.
- Render list items using `@for`.
- Show fallback message with `@empty`.

---

## 4. Computed Signal for Total
**🎯 Goal:** Demonstrate `computed()` for derived state.

### 📝 Description
Introduce a `computed()` value that sums all expenses.

### ✅ Attendee Tasks
- Create `totalAmount = computed(() => ...)`.
- Display total inside a `ExpenseSummaryComponent`.

---

## 5. Remove Expense — Output Signal
**🎯 Goal:** Show `output()` signals and parent/child communication.

### 📝 Description
Enable deletion of expenses from inside `ExpenseList`.

### ✅ Attendee Tasks
- Create an `@Output` signal: `removeExpense = output<number>()`.
- Emit index or id.
- Handle removal in the parent via `update()`.

### 5a. Effect: Log Removed Expense
**🎯 Goal:** Show another real-world side effect.

### 📝 Description
Whenever an expense is removed, log it.

### ✅ Attendee Tasks
- Add an `effect` watching the expense list.
- Detect removal and log the removed item.

---

### 🟡 Optional / Bonus Exercises (time permitting)
The following exercises (6–8) are optional and can be used as stretch goals if the class moves quickly or as take-home practice.

## 6. Expense Filtering via Computed
**🎯 Goal:** Use `computed()` to derive a filtered view of the expense list.

### 📝 Description
Introduce a category-based filter for expenses. Instead of mutating the main list, derive `filteredExpenses` from `expenses` and `selectedCategory`. This reinforces the idea of keeping source-of-truth state minimal and using derived signals for UI concerns.

### ✅ Attendee Tasks
- Add a `selectedCategory = signal<string | null>(null)` (e.g. "all", "food", "travel", ...).
- Create `filteredExpenses = computed(() => ...)` that:
  - Returns all expenses when `selectedCategory()` is `null` or "all".
  - Returns only matching expenses otherwise.
- Add a simple UI control (select / buttons) to change `selectedCategory`.
- Make `ExpenseList` render `filteredExpenses` instead of `expenses`.

---

## 7. `@defer` on ExpenseList
**🎯 Goal:** Introduce `@defer` and show how it interacts with a signal-based list.

### 📝 Description
Use the `@defer` block to delay rendering of the expense list. This can simulate performance optimization patterns and modern Angular rendering strategies.

Two suggested variants (you can pick one or both, depending on time):
- `on interaction`: the list only appears after clicking a "Show expenses" or "Load expenses" button.
- `when`: the list appears automatically when there is at least one expense.

### ✅ Attendee Tasks
- Wrap `ExpenseList` usage in an `@defer` block.
- Implement the `on interaction` variant, e.g.:
  - A button that, when clicked, triggers rendering of the list.
- (Optional) Implement the `when` variant using a condition like `when expenses().length > 0`.
- Verify that:
  - Adding expenses still works as expected.
  - The list only renders according to the chosen `@defer` strategy.

---

## 8. Create a Provider to Isolate Logic
**🎯 Goal:** Move application state and logic into a dedicated Angular service (provider) and share it across components.

### 📝 Description
Refactor the app so that all expense-related state (signals, computed values, and possibly effects) lives inside an Angular service. Components become thinner, focusing only on presentation and interaction while delegating state management to the provider.

### ✅ Attendee Tasks
- Create an Angular service (e.g. `ExpenseService`).
- Move or create the application state inside the service:
  - `expenses` signal
  - `filteredExpenses` computed
  - `totalAmount` computed
  - Any relevant `effect` (logging, persistence, etc.).
- Inject the service into `ExpenseForm`, `ExpenseList`, and `ExpenseSummary` (or whichever components are used).
- Replace direct state access in components with calls to the service (read signals, call methods like `addExpense()` and `removeExpense()`).
- Verify that:
  - All components stay in sync via the shared service.
  - No duplicated state remains in individual components.

