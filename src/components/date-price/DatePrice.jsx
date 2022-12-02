import './date-price.css';

const DatePrice = () => {
    return (
      <div className='datePrice__container'>
        <h3>Choose your next destination:</h3>
        <input type="text" placeholder='Destination'/>
        <p>Return  <input type="checkbox"/></p>           
      </div>
    );
  }
  
  export default DatePrice;