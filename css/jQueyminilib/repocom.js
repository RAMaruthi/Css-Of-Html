class Expense{
    static no = 0;
    constructor( detail, amount, date){
        this.id = ++Expense.no;
        this.date = date;
        this.detail = detail;
        this.amount = amount;
    }
}

class ExpenseManager{
    expenses = []; //#makes it a private field of the class. 

    addNewExpense = (expense) => this.expenses.push(expense);
    
    findExpenses = (detail) => this.expenses.filter((e)=>e.detail.includes(detail));

    findExpensesByDate = (date) => this.expenses.filter((e)=>dateString(e.date) == date);

    getAllExpenses = () => this.expenses;

    getExpenseById = (id) => this.expenses.find((e)=>e.id == id);

    modifyExpense = (id, expense) =>{
        let foundIndex = this.expenses.findIndex(ex => ex.id == id);
        if(foundIndex == -1) throw "Expense not found to update";
        this.expenses.splice(foundIndex, 1, expense);
    }
}

