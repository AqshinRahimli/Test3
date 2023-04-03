import axios from 'axios';
import React, { useState } from 'react';
import Button from '../Components/Button';
import İnput from "../Components/İnput";
import Table from '../Components/Table';

const Students = () => {
  
  const [student,setStudent]=useState({
    number:"",
    lastName:"",
    surName:""
  });
  
  const handleChange = (e) => {
    setStudent({...student, [e.target.name]: e.target.value});
  };


  const loginBtn = () => {
    axios
      .post("http://localhost:9000/create-data", student).then((response) => {
        console.log(response);
      })
  }
 
  const{number,lastName,surName}=student;

  return (
    <div className="container">
      <div className="registration">
        <h2>Tələbəni Daxil Edin</h2>

        <div className='number'>
          <div className="number-main">+994</div>
          <İnput type="number" placeholder="Nömrəni daxil edin" onChange={handleChange} name="number" value={number}/>
        </div>

        <div className="fullname">
          <div className="input-name">
            <h2>Ad</h2>
            <İnput type="text" placeholder="Tələbənin adı" onChange={handleChange} name="lastName" value={lastName}/>
          </div>
          <div className="input-surname">
            <h2>Soyad</h2>
            <İnput type="text" placeholder="Tələbənin soyadı" onChange={handleChange} name="surName" value={surName}/>
          </div>
        </div>
        <div className="click-btn">
          <Button className="click-btn" text="Daxil et" onClick={loginBtn} />
        </div>

      </div>

      <div className="filter">
        <h4>Tələbələr</h4>
        <div className="search-input">
          <input type="text" placeholder="Tələbənin əlaqə nömrəsi" />
          <button>Axtar</button>
        </div>
      </div>
      <div className="filter-table">
        <Table />
      </div>
    </div>
  )
}

export default Students



















  // const [name, setName] = useState("");
  // const [surName, setSurName] = useState("");


  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleChangeSurName = (e) => {
  //   setSurName(e.target.value);
  // };
