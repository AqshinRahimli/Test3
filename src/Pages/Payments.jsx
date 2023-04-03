import React from 'react'
import axios from 'axios';
import { useState } from 'react';



const Payments = () => {

  const [payments, setPayments] = useState({
    number: "", date: "", month: "", course: "",
    stydent: "", image: "", cart_owner: ""
  });

  const setHandleChange = (e) => {
    setPayments({ ...payments, [e.target.name]: e.target.value });
  }

  const sentPaymentsBtn = () => {
    axios
      .post("http://localhost:9000/create-data", payments).then((response) => {
        console.log(response);
      })
  }
  
  const { number, date, month, course, stydent, image, cart_owner } = payments;

  return (
    <div className='payments'>
      <div className="container">
        <div className="form">
          <h2>Ödənişi Daxil Edin</h2>
          <ul>
            <li>
              <h4>Ödəniş</h4>
              <input type="number" placeholder='Dərsin ödənişi' onChange={setHandleChange} name="number" value={number} />
            </li>
            <li>
              <h4>Tarix</h4>
              <input type="date" onChange={setHandleChange} name="date" value={date} />
            </li>
          </ul>
          <ul>
            <li>
              <h4>Ay</h4>
              <input type="text" placeholder='Ayı daxil edin' onChange={setHandleChange} name="month" value={month} />

            </li>
            <li>
              <h4>Kursu</h4>
              <input type="text" placeholder='Kursu seçin' onChange={setHandleChange} name="course" value={course} />
            </li>
          </ul>
          <ul>
            <li>
              <h4>Tələbə</h4>
              <input type="text" placeholder='Tələbə seçin' onChange={setHandleChange} name="stydent" value={stydent} />
            </li>
            <li className='cart-check'>
              <h4>Çekin şəkili</h4>
              <input type="file" onChange={setHandleChange} name="image" value={image} />
            </li>
          </ul>
          <ul className='owner'>
            <li>
              <h4>Kartın sahibi</h4>
              <input type="text" placeholder='Kartı sahibini daxil edin' onChange={setHandleChange} name="cart_owner" value={cart_owner} />
            </li>
          </ul>
          <div className="button">
            <button onClick={sentPaymentsBtn}>Daxil et</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments