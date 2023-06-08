
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from '../../image/signup_img.avif';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {
	Container,
	FormHead,
	FormSection,
	LeftData,
	RightData,
	FormP,
	
} from './SigninElements';
const SignIn = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
	const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }
	
	return (
		<>
			<Container>
			<FormSection>
				<LeftData>
					<FormHead>Create Account</FormHead>
					<Form>
						

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="email"name='email' onChange={getdata} placeholder="Enter email" />
						</Form.Group>

						

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicPassword">
							<Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
						</Form.Group>
						
						<Button variant="primary" className="ml-5 col-lg-6" style={{background:"rgb(67,185,127)"}} onClick={addData} type="submit">
							Submit
						</Button>
					</Form>
					<FormP>Already have an Account <NavLink to="/signin"></NavLink> <span>Sign In</span></FormP>
				</LeftData>
				<RightData>
					<div className="sign_img mt-3">
						<img src={Image} style={{maxWidth:400}} alt=""/>
					</div>
				</RightData>
			</FormSection>
		</Container>
		</>
	);
};

export default SignIn;
