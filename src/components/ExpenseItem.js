import './ExpenseItem.css';

function ExpenseItem(){
   const expenseDate = new Date(2022,12,20);
   const expenseTitle = 'Car Insurance';
   const expenseAmount = 350;
   return ( 
   <div className='form'>
      <h2 className="title">ExpenseItem</h2><hr></hr>
      <div>{expenseDate.toISOString()}</div>
      <div className="item">
         <h2>{expenseTitle}</h2>
         <div>Rs {expenseAmount}</div>
      <p>Food Rs 10</p>
      <p>Petrol Rs 100</p>
      <p>Movies Rs 200</p>
      </div>
   </div>
   );
}
function LocationOfExpense(){

   return (
      <div>
      <h2 className="title1">LocationOfExpense</h2><hr></hr>
      <div className="expense">
      <p>Hotel</p>
      <p>Petrol Bunk</p>
      <p>Theater</p>
      </div>
   </div>
   );
}


export{ExpenseItem,LocationOfExpense};
