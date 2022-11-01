 import React from "react";
 import './ExpenseForm.css';
 const ExpenseForm = () => {
    return (
       <form>
        <div className="ExpenseForm">
            <div className ="ExpenseForm">
                <label>Expense title</label>
                <input type = 'text'/>
            </div>
            <div className="ExpenseForm">
                <label>Amount</label>
                <input type = 'number'/>
            </div>
            <div className="ExpenseForm">
                <lable>Date</lable>
                <input type='date' min="2015-01-01" max='2023'/>
            </div>
        </div>
        <div className="ExpenseForm>">
            <button type="Submit">Add Expense</button>
        </div>
       </form>
    );
 }
 export default ExpenseForm;
 