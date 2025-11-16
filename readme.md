## 🧭 Workshop Step-by-Step: Branch Objectives & Tasks

### 🪜 Branch 00 — `00-start`
**🎯 Objective:** Set up the initial Angular project structure.

**🧩 Description:**
We'll create a basic Angular app with placeholder components (`ExpenseForm`, `ExpenseList`, `ExpenseSummary`) and an empty service (`ExpenseService`). No signals logic is implemented yet.

**✅ Attendee Tasks:**
- Clone the repository and open it in your IDE.
- Explore the project structure and existing files.
- Run the app to verify that the placeholder UI is visible.

---

### 🪜 Branch 01 — `01-signal-basics`
**🎯 Objective:** Understand the fundamentals of `signal` in Angular.

**🧩 Description:**
We'll introduce `signal()`, `set()`, and `update()`. You’ll build a small demo (counter or single expense example) to see how signals drive template updates.

**✅ Attendee Tasks:**
- Create a `signal` in `AppComponent` or a test component.
- Read and update the signal value from the template.
- Experiment with the difference between `set()` and `update()`.
- (Optional) Add a console log to observe changes.

---

### 🪜 Branch 02 — `02-expense-list`
**🎯 Objective:** Manage a list of expenses using a `signal`.

**🧩 Description:**
We'll move from a single value to an array of expenses (`Expense[]`). Attendees will allow users to add new expenses via a form that updates the main signal.

**✅ Attendee Tasks:**
- Create a `signal` named `expenses = signal<Expense[]>([])` in the main component.
- Implement an `addExpense()` method to update the signal.
- Render the expense list using `@for` in the template.
- (Optional) Add a button to remove expenses.

---

### 🪜 Branch 03 — `03-computed-summary`
**🎯 Objective:** Calculate derived values using `computed()`.

**🧩 Description:**
We'll demonstrate how to derive data from signals, creating a dynamic total of expenses and an automatic count.

**✅ Attendee Tasks:**
- Create a `computed()` signal to sum all expense amounts (`totalAmount`).
- Create another `computed()` to count the total expenses (`expenseCount`).
- Display these values inside `ExpenseSummaryComponent`.

---

### 🪜 Branch 04 — `04-shared-service`
**🎯 Objective:** Share state using a signal-based service.

**🧩 Description:**
We'll move signals and computed properties from the main component into a shared service (`ExpenseService`) so that multiple components can access and react to the same data.

**✅ Attendee Tasks:**
- Move signals and computed properties into `ExpenseService`.
- Inject the service into `ExpenseList` and `ExpenseSummary` components.
- Read and update signals through the service.
- (Optional) Add an `effect()` to log or persist expenses to `localStorage`.

---

### 🪜 Branch 05 — `05-final-app`
**🎯 Objective:** Combine all concepts into a complete application.

**🧩 Description:**
We’ll finalize the app: the form, list, and summary will all stay synchronized in real time via signals. All concepts (`signal`, `computed`, `effect`) will be working together.

**✅ Attendee Tasks:**
- Verify that the flow works correctly: add → list → total.
- Refine the code and remove redundancies.
- Add a small enhancement (e.g., category filter or reset button).
- Review key concepts before closing the session.
