import React from 'react'
import { useParams } from 'react-router';
import "./form.styles.scss"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Button } from '../../components/button/button.component';
export default function Form() {

    const {userId:DealerID} = useParams();
    const handleSubmit = ( event )=>{
        event.preventDefault();
        console.log(event.target);
        const {motorNo,purchaseDate,model,salutation,fname,lname,email,addr1,addr2,addr3,tehsil,district,pincode,phoneNo,aadharNo,dob} = event.target;
       
        const data = {
            "_id":uuidv4(),
            "dealerId":DealerID,
            "motorNo":motorNo.value,
            "purchaseDate" : purchaseDate.value,
            "model" : model.value,
            "salutation":salutation.value,
            "fname":fname.value,
            "lname":lname.value,
            "email":email.value,
            "addr1":addr1.value,
            "addr2":addr2.value,
            "addr3":addr3.value,
            "tehsil":tehsil.value,
            "district":district.value,
            "pincode":pincode.value,
            "phoneNo":phoneNo.value,
            "aadharNo":aadharNo.value,
            "dob":dob.value,
                }
       alert("Wait....")            
        axios.post("https://heydo-tect-back.herokuapp.com/create",data).then((res)=>{window.location.href= window.location.origin + "/success"}).catch(((err)=>{
            alert("error occured please reload and fill the form again");
        }));
    }
  return (
    <div id="form-section">
        <form onSubmit={handleSubmit} >
            <fieldset>
                <label htmlFor="motorNo">Motor Number (Check Rear Wheel)</label>
                <br />
                <input type="text" name="motorNo" id="motorNo"/>
                <br />
                <label htmlFor="purchaseDate">Purchase date</label>
                <br />
                <input type="date" name="purchaseDate" id="purchaseDate" />
                <br />
                <label htmlFor="model">Model</label>
                <br />
                <select type="select" name="model" id="model">
                    <option value="r30">R30</option>
                    <option value="lite">Lite</option>
                    <option value="dual-25">Dual 25</option>
                    <option value="dual-35">Duel 35</option>
                    <option value="dual-55">Duel 55</option>
                    <option value="ridge-plus">Ridge+</option>
                    <option value="praise-pro">Praise Pro</option>
                    <option value="ipraise-plus">iPraise+</option>
                    <option value="okhi90">OKHI 90</option>
                </select>
                <br />
                <label htmlFor="salutation">Salutation</label>
                <br />
                <select type="select" name="salutation" id="salutation">
                   <option value="mrs">Mrs.</option>
                    <option value="mr">Mr</option>
                    <option value="miss">Miss</option>
                    <option value="company">Company</option>
                    <option value="dr">Dr</option>
                </select>
                <br />
                <label htmlFor="fname">First Name</label>
                <br />
                <input type="text" name="fname" id="fname" />
                <br />
                <label htmlFor="lname">Last Name</label>
                <br />
                <input type="text" name="lname" id="lname" />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" id="email" />
                <br />
                <label htmlFor="addr1">Address Line 1</label>
                <br />
                <input type="text" name="addr1" id="addr1" />
                <br />
                <label htmlFor="addr2">Address Line 2</label>
                <br />
                <input type="text" name="addr2" id="addr2" />
                <br />
                <label htmlFor="addr3">Address Line 3</label>
                <br />
                <input type="text" name="addr3" id="addr3" />
                <br />
                <label htmlFor="tehsil">Tehsil</label>
                <br />
                <input type="text" name="tehsil" id="tehsil" />
                <br />
                <label htmlFor="district">District</label>
                <br />
                <input type="text" name="district" id="district" />
                <br />
                <label htmlFor="pincode">Pincode</label>
                <br />
                <input type="text" name="pincode" id="pincode" />
                <br />
                <label htmlFor="phoneNo">Phone Number</label>
                <br />
                <input type="text" name="phoneNo" id="phoneNo" />
                <br />
                <label htmlFor="aadharNo">Aadhaar Card Number</label>
                <br />
                <input type="text" name="aadharNo" id="aadharNo" />
                <br />
                <label htmlFor="dob">Date of Birth</label>
                <br />
                <input type="date" name="dob" id="dob" />
                <br />
                <Button buttonSize={"btn--small"} buttonStyle = "btn--primary">Submit</Button>

            </fieldset>
        </form>
    </div>
  )
}
