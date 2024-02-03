import React, { useState } from "react";
import './Input.css'

function Input() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isVisable, setIsVisable] = useState(true)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = () => {
        setIsVisable(false)
    }

  return (
    <div>
      
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" onChange={handleName} value={name} />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" onChange={handleLastName} value={lastName} />
        <br />
        <label for="lname">Email:</label>
        <br />
        <input type="email" id="lname" name="lname" onChange={handleLastName} />
        <br />
        <label htmlFor="" className="gender">Male</label>
        <br />
        <input type="checkbox" id="lname" name="lname" />
        <br />
        <label htmlFor="" className="gender">Female</label>
        <br />
        <input type="checkbox" id="lname" name="lname" />
        <br />
        <label for="cars">Birthday Year</label>
        <select name="cars" id="cars" form="carform">
          <option value="">1980 - 1990</option>
          <option value="">1990 - 2000</option>
          <option value="">2000-2010</option>
        </select>
        <br />
        <label htmlFor="">Tell About Yourself: </label>
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <input type="submit" onClick={handleSubmit}/>
        <h1></h1>
      
    </div>
  );
}

export default Input;
