import React from 'react'
import { useParams } from 'react-router';
import "./form.styles.scss"
import axios from 'axios';
import { Button } from '../../components/button/button.component';
import { useState,useRef } from 'react';
import { state_arr,get_city_arr } from '../../utils/cities';
export default function Form() {
    const FinanceDropdownList = ['AXIS BANK LTD.', 'BAJAJ FINSERV', 'BANK OF BARODA', 'BANK OF INDIA', 'CANARA BANK', 'CREDIT FAIR', 'HDFC BANK LTD', 'ICICI BANK LTD', 'IDFC FIRST BANK LTD.', 'I-LOAN CREDIT PVT LTD', 'INDUSIND BANK LTD', 'L&T FINANCE', 'LOAN TAP', 'MANNAPURAM FINANCE', 'OTHERS', 'OTTO CAPITAL', 'PAYTM', 'PINE LABS', 'PUNJAB NATIONAL BANK', 'SHRIRAM CITY UNION FINANCE LTD', 'TATA CAPITAL FINANCIAL SERVICE LIMITED', 'UNION BANK OF INDIA', 'WHEELS EMI', 'ZEST MONEY']
    const { userId: DealerID } = useParams();
    const [formState, setFormState] = useState([false, false, false, false])
    const [currState ,setCurrState] = useState("Delhi");
    // console.log(formState);
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target);
        const { financer,rsa_length,motorNo, purchaseDate, model, salutation, fname, lname, email, addr1, addr2, addr3, tehsil, district, pincode, phoneNo, aadharNo, dob, nominee_name, relation_with_applicant, nominee_date_of_birth, city, state, state_code, district_code, nominee_age, gst_in } = event.target;
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
            "motorNo": motorNo ? motorNo.value : "",
            "purchaseDate": purchaseDate ? purchaseDate.value : "",
            "model": model ? model.value : "",
            "salutation": salutation ? salutation.value : "",
            "first_name": fname ? fname.value : "",
            "last_name": lname ? lname.value : "",
            "email_id": email ? email.value : "",
            "add_first": addr1 ? addr1.value : "",
            "add_second": addr2 ? addr2.value : "",
            "add_third": addr3 ? addr3.value : "",
            "tehsil": tehsil ? tehsil.value : "",
            "district": district ? district.value : "",
            "pincode": pincode ? pincode.value : "",
            "mobile_no": phoneNo ? phoneNo.value: "",
            "aadharNo": aadharNo ? aadharNo.value : "",
            "date_of_birth": dob ? dob.value : "",
            "financer": financer ? financer.value : "",
            "inclusions": getInclusions(),
            "nominee_name": nominee_name ?  nominee_name.value : "",
            "Rsa Membership type":rsa_length ? rsa_length.value : "",
            "relation_with_applicant": relation_with_applicant ? relation_with_applicant.value : "",
            "nominee_date_of_birth": nominee_date_of_birth ? nominee_date_of_birth.value : "",
            "nominee_age": nominee_age ? nominee_age.value: "",
            "finance": document.getElementById("finance").checked ? "Y" : "N",
            "gst_in": gst_in ? gst_in.value : "",
            "gst_check": document.getElementById("gst").checked ? "1" : "0",
            "distric_code": district_code ? district_code.value : "",
            "state_code": state_code ? state_code.value : "",
            "state": state ? state.value : "",
            "city": city ? city.value : ""
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
                        <label className='required' htmlFor="motorNo">Motor Number (Check Rear Wheel)</label>
                        <br />
                        <input required type="text" name="motorNo" id="motorNo" />
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
                            <option value="R30">R30</option>
                            <option value="LITE">Lite</option>
                            <option value="DUAL28">Dual 28</option>
                            <option value="DUAL35">Duel 35</option>
                            <option value="DUAL55">Duel 55</option>
                            <option value="RIDGE+">Ridge+</option>
                            <option value="PRAISEPRO">Praise Pro</option>
                            <option value="IPRAISEPLUS">iPraise+</option>
                            <option value="OKHI90">OKHI 90</option>
                        </select>
                        <br />
                    </div>
                    <div className="inp-block">
                        <div className="inclusions">
                            <h2 htmlFor="">Inclusions</h2>
                            <br />
                            <input onClick={() => { setFormState(formState.map((ele, indx) => indx === 2 ? !ele : ele)) }} type="checkbox" name="rsa" id="rsa" value='rsa' />
                            <label htmlFor="rsa">RSA</label>
                            <br />
                            <input onClick={() => { setFormState(formState.map((ele, indx) => indx === 3 ? !ele : ele)) }} type="checkbox" name="insurance" id="insurance" value='insurance' />
                            <label htmlFor="rsa">Insurance</label>
                            <br />
                        </div>
                    </div>
                    {formState[2]&&<div className="inp-block">
                            <label className='required' htmlFor="rsa_length">RSA Membership Type</label>
                            <br />
                            <select type="select" name="rsa_length" id="rsa_length">
                                <option value="1-Yr RSA Prog">1-Yr RSA Prog</option>
                                <option value="2-Yr RSA Prog">2-Yr RSA Prog</option>
                                <option value="3-Yr RSA Prog">3-Yr RSA Prog</option>
                            </select>
                            <br />
                        </div>}
                    <div className="inp-block">
                        <label className='required' htmlFor="salutation">Salutation</label>
                        <br />
                        <select type="select" name="salutation" id="salutation">
                            <option value="Mrs.">Mrs.</option>
                            <option value="Mr.">Mr</option>
                            <option value="Miss">Miss</option>
                            <option value="M/s">M/s</option>
                            <option value="Company">Company</option>
                            <option value="Dr.">Dr</option>
                        </select>
                        <br />
                    </div>

                    <div className="inp-block">
                        <label className='required' htmlFor="fname">First Name</label>
                        <br />
                        <input required type="text" name="fname" id="fname" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label  htmlFor="lname">Last Name</label>
                        <br />
                        <input  type="text" name="lname" id="lname" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label className='required' htmlFor="email">Email</label>
                        <br />
                        <input required type="email" name="email" id="email" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label className='required' htmlFor="addr1">Address Line 1</label>
                        <br />
                        <input required type="text" name="addr1" id="addr1" maxlength="30" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="addr2">Address Line 2</label>
                        <br />
                        <input type="text" name="addr2" id="addr2" maxlength="30" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="addr3">Address Line 3</label>
                        <br />
                        <input type="text" name="addr3" id="addr3" maxlength="30" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label className='required' htmlFor="tehsil">Tehsil</label>
                        <br />
                        <input required type="text" name="tehsil" id="tehsil" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label className='required' htmlFor="district">District</label>
                        <br />
                        <input required type="text" name="district" id="district" />
                        <br />
                    </div>



{/* 
                    <div className="inp-block">
                        <label className='required' htmlFor="state">State</label>
                        <br />
                        <input required type="text" name="state" id="state   " />
                    </div>
                     */}

                    <div className="inp-block">
                        <label className='required' htmlFor="state">State</label>
                        <br />
                        <select onChange={(event)=>setCurrState(event.target.value)}  type="select" name="state" id="state">
                            {
                             state_arr.map( (ele)=><option value={ele}>{ele}</option> )
                            }
                        </select>
                    </div>

                    {formState[2] && <div className="inp-block">
                        <label className='required' htmlFor="city">City</label>
                        <br />
                        <select type="select" name="city" id="city">
                             {get_city_arr(state_arr.indexOf(currState)+1).map( (ele)=><option value={ele}>{ele}</option> )}
                        </select>
                        <br />
                    </div>}

                    <div className="inp-block">
                        <br />
                        <label className='required' htmlFor="pincode">Pincode</label>
                        <br />
                        <input required type="text" name="pincode" id="pincode" />
                    </div>
                    {
                        formState[3] && <div className="inp-block">
                            <br />
                            <label className='required' htmlFor="state_code">State Code</label>
                            <br />
                            <input required type="text" name="state_code" id="state_code" />
                            <br />
                        </div>}

                    <div className="inp-block">
                        <div className="inclusions">

                            <input onClick={() => { setFormState(formState.map((ele, indx) => indx === 0 ? !ele : ele)) }} type="checkbox" className='checkbox' name="finance" id="finance" />
                            <label htmlFor="finance">Finance</label>
                            <br />
                            <input onClick={() => { setFormState(formState.map((ele, indx) => indx === 1 ? !ele : ele)) }} type="checkbox" className='checkbox' name="gst" id="gst" />
                            <label htmlFor="gst">GST</label>

                        </div>
                    </div>
{formState[0]&&<div className="inp-block">
                            <label className='required' htmlFor="financer">Financer</label>
                            <br />
                            <select type="select" name="financer" id="financer">
                                {FinanceDropdownList.map((ele,ind)=><option key={ind} value= {`${ele}`} >{ele}</option>)}
                    
                            </select>
                            <br />
                    </div>}
                    <br />
                    <br />
                    {formState[1] && <div className="inp-block">

                        <label className='required' htmlFor="gst_in">GST In</label>
                        <br />
                        <input required type="text" name="gst_in" id="gst_in" />
                        <br />
                    </div>}



                    {formState[3] && <div className="inp-block">
                        <label htmlFor="district_code">District Code</label>
                        <br />
                        <input type="text" name="district_code" id="district_code" />
                        <br />
                    </div>}
                    <div className="inp-block">
                        <label className='required' htmlFor="phoneNo">Phone Number</label>
                        <br />
                        <input required type="text" name="phoneNo" id="phoneNo" maxlength="10" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label htmlFor="aadharNo">Aadhaar Card Number</label>
                        <br />
                        <input type="text" name="aadharNo" id="aadharNo" />
                        <br />
                    </div>
                    <div className="inp-block">
                        <label className='required' htmlFor="dob">Date of Birth</label>
                        <br />
                        <input required type="date" name="dob" id="dob" />
                        <br />
                    </div>
                    <br />
                    {formState[3] && <>
                        <div className="inp-block">
                            <label className='required' htmlFor="nominee_name">Nominee Name</label>
                            <br />
                            <input required type="text" name="nominee_name" id="nominee_name" />
                        </div>
                        <br />
                        <div className="inp-block">
                            <label className='required' htmlFor="nominee_age">Nomine's age</label>
                            <br />
                            <input required type="text" name="nominee_age" id="nominee_age" />
                            <br />
                        </div>
                        <div className="inp-block">
                            <label className='required' htmlFor="relation_with_applicant">Relation with applicant</label>
                            <br />
                            <select type="select" name="relation_with_applicant" id="relation_with_applicant">
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Self">Self</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Father-in Law">Father in Law</option>
                                <option value="Mother-in Law">Mother in Law</option>
                                <option value="Others">Others   </option>
                            </select>
                            <br />
                        </div>
                        <div className="inp-block">
                            <label className='required' htmlFor="nominee_date_of_birth">Nominee's Date Of Birth</label>
                            <br />
                            <input required type="date" name="nominee_date_of_birth" id="nominee_date_of_birth" />
                            <br />
                        </div>
                    </>}
                    <Button buttonSize={"btn--small"} buttonStyle="btn--primary">Submit</Button>

                </fieldset>
            </form>
        </div>
    )
}
