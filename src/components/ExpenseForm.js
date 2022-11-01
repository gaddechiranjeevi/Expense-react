 import React, { useState } from "react";
 import './ExpenseForm.css';
 const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
 
    const titleChange = (event) => {
        setEnteredTitle(event.target.value);
    };
    const AmountEntered = (event) => {
        setEnteredAmount(event.target.value);
    };
    const DateEntered = (event) => {
        setEnteredDate(event.target.value);
    };
    return (
       <form>
        <div className="ExpenseForm">
            <div className ="ExpenseForm">
                <label>Expense title</label>
                <input type = 'text' onChange = {titleChange}/>
            </div>
            <div className="ExpenseForm">
                <label>Amount</label>
                <input type = 'number' onChange={AmountEntered}/>
            </div>
            <div className="ExpenseForm">
                <lable>Date</lable>
                <input type='date' min="2015-01-01" max='2023' onChange={DateEntered}/>
            </div>
        </div>
        <div className="ExpenseForm>">
            <button type="Submit">Add Expense</button>
        </div>
       </form>
    );
 }
 export default ExpenseForm;
 