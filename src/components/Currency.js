import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Currency.css';
import { AppContext } from '../context/AppContext';


// import { AppContext } from '../context/AppContext';



const Currency = () => {
  const {CurrencySign, setCurrency}   = useContext(AppContext);

  


    return (

       <div>

    <form action=""  className='form' >
      <label>Currency</label>
      <select 
      className="select" 
      onChange={(e) => setCurrency(e.target.value)}
    >
            <option value="$" name="$"> $Dollar</option>
            <option value="£" name="£">£Pound</option>
            <option value="€" name="€">€Finance</option>
            <option value="₹" name="₹">₹Ruppee</option>

           </select>
    </form>

<p> {CurrencySign}   </p>
    </div>


    )
};

export default Currency;
