import React from 'react'
import { useParams } from 'react-router';
import "./form.styles.scss"
import axios from 'axios';
import { Button } from '../../components/button/button.component';
export default function Form() {

    const { userId: DealerID } = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target);
        const { motorNo, purchaseDate, model, salutation, fname, lname, email, addr1, addr2, addr3, tehsil, district, pincode, phoneNo, aadharNo, dob, nominee_name, relation_with_applicant, nominee_date_of_birth, city, state, state_code, district_code, nominee_age, gst_in } = event.target;
        const getInclusions = () => {
            let inclusions_raw = [document.getElementById("rsa"), document.getElementById("insurance")]
            // console.log(inclusions_raw);
            let inclusions = [];
            inclusions_raw.forEach(element => {
                if (element.checked) {
                    inclusions.push(element.id)
                }
            });

            return inclusions;

        }
        const data = {
            "status": "pending",
            "dealerId": DealerID,
            "motorNo": motorNo.value,
            "purchaseDate": purchaseDate.value,
            "model": model.value,
            "salutation": salutation.value,
            "first_name": fname.value,
            "last_name": lname.value,
            "email_id": email.value,
            "add_first": addr1.value,
            "add_second": addr2.value,
            "add_third": addr3.value,
            "tehsil": tehsil.value,
            "district": district.value,
            "pincode": pincode.value,
            "mobile_no": phoneNo.value,
            "aadharNo": aadharNo.value,
            "date_of_birth": dob.value,
            "inclusions": getInclusions(),
            "nominee_name": nominee_name.value,
            "relation_with_applicant": relation_with_applicant.value,
            "nominee_date_of_birth": nominee_date_of_birth.value,
            "nominee_age": nominee_age.value,
            "finance": document.getElementById("finance").checked ? "Y" : "N",
            "gst_in": gst_in.value,
            "gst_check": document.getElementById("gst").checked ? "1" : "0",
            "distric_code": district_code.value,
            "state_code": state_code.value,
            "state": state.value,
            "city": city.value
        }
        // console.log(data);
        alert("Wait....")
        axios.post("https://heydo-tect-back.herokuapp.com/create", data).then((res) => { window.location.href = window.location.origin + "/success" }).catch(((err) => {
            alert("error occured please reload and fill the form again");
        }));
    }
    return (
        <div id="form-section">
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <div className="inp-block">
                        <label htmlFor="motorNo">Motor Number (Check Rear Wheel)</label>
                        <br />
                        <input type="text" name="motorNo" id="motorNo" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="purchaseDate">Purchase date</label>
                        <br />
                        <input type="date" name="purchaseDate" id="purchaseDate" />
                        <br />
                    </div>
                    <div className="inp-block">
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
                    </div>
                    <div className="inp-block">
                        <label htmlFor="salutation">Salutation</label>
                        <br />
                        <select type="select" name="salutation" id="salutation">
                            <option value="mrs">Mrs.</option>
                            <option value="mr">Mr</option>
                            <option value="miss">Miss</option>
                            <option value="ms">M/s</option>
                            <option value="company">Company</option>
                            <option value="dr">Dr</option>
                        </select>
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="fname">First Name</label>
                        <br />
                        <input type="text" name="fname" id="fname" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="lname">Last Name</label>
                        <br />
                        <input type="text" name="lname" id="lname" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name="email" id="email" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="addr1">Address Line 1</label>
                        <br />
                        <input type="text" name="addr1" id="addr1" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="addr2">Address Line 2</label>
                        <br />
                        <input type="text" name="addr2" id="addr2" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="addr3">Address Line 3</label>
                        <br />
                        <input type="text" name="addr3" id="addr3" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="tehsil">Tehsil</label>
                        <br />
                        <input type="text" name="tehsil" id="tehsil" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="district">District</label>
                        <br />
                        <input type="text" name="district" id="district" />
                        <br />
                    </div>

                    <div className="inp-block">
                        <label htmlFor="city">City</label>
                        <br />
                        <input type="text" name="city" id="city" />
                        <br />
                    </div>


                    <div className="inp-block">
                        <label htmlFor="state">State</label>
                        <br />
                        <input type="text" name="state" id="state   " />
                    </div>

                    <div className="inp-block">
                        <br />
                        <label htmlFor="pincode">Pincode</label>
                        <br />
                        <input type="text" name="pincode" id="pincode" />
                    </div>

                    <div className="inp-block">
                        <br />
                        <label htmlFor="state_code">State Code</label>
                        <br />
                        <input type="text" name="state_code" id="state_code" />
                        <br />
                    </div>

                    <div className="inp-block">
                        <div className="inclusions">
                            
                                <input type="checkbox" className='checkbox' name="finance" id="finance" />
                                <label htmlFor="finance">Finance</label>
                                <br />
                                <input type="checkbox" className='checkbox' name="gst" id="gst" />
                                <label htmlFor="gst">GST</label>
                            
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="inp-block">

                        <label htmlFor="gst_in">GST In</label>
                        <br />
                        <input type="text" name="gst_in" id="gst_in" />
                        <br />
                    </div>



                    <div className="inp-block">
                        <label htmlFor="district_code">District Code</label>
                        <br />
                        <input type="text" name="district_code" id="district_code" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="phoneNo">Phone Number</label>
                        <br />
                        <input type="text" name="phoneNo" id="phoneNo" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="aadharNo">Aadhaar Card Number</label>
                        <br />
                        <input type="text" name="aadharNo" id="aadharNo" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="dob">Date of Birth</label>
                        <br />
                        <input type="date" name="dob" id="dob" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <div className="inclusions">
                            <h2 htmlFor="">Inclusions</h2>
                            <br />
                            <input type="checkbox" name="rsa" id="rsa" value='rsa' />
                            <label htmlFor="rsa">RSA</label>
                            <br />
                            <input type="checkbox" name="insurance" id="insurance" value='insurance' />
                            <label htmlFor="rsa">Insurance</label>
                            <br />
                        </div>
                    </div>
                    <br />
                    <div className="inp-block">
                        <label htmlFor="nominee_name">Nominee Name</label>
                        <br />
                        <input type="text" name="nominee_name" id="nominee_name" />
                    </div>
                    <br />
                    <div className="inp-block">
                        <label htmlFor="nominee_age">Nominee age</label>
                        <br />
                        <input type="text" name="nominee_age" id="nominee_age" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="relation_with_applicant">Relation with applicant</label>
                        <br />
                        <select type="select" name="relation_with_applicant" id="relation_with_applicant">
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="son">Son</option>
                            <option value="daughter">Daughter</option>
                            <option value="spouse">Spouse</option>
                            <option value="self">Self</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="father_in_law">Father in Law</option>
                            <option value="mother_in_law">Mother in Law</option>
                            <option value="others">Others   </option>
                        </select>
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="nominee_date_of_birth">Nominee's Date Of Birth</label>
                        <br />
                        <input type="date" name="nominee_date_of_birth" id="nominee_date_of_birth" />
                        <br />
                    </div>
                    <Button buttonSize={"btn--small"} buttonStyle="btn--primary">Submit</Button>

                </fieldset>
            </form>
        </div>
    )
}
