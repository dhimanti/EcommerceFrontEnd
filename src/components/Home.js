import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function Home() {
    const navigate = useNavigate();
   
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            const data = jwtDecode(token);
            console.log(data);

            if(!data) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } else {
            console.log("No token Found")
            navigate('/login');
        }
    })

    return(
        <>
            <center>
                <Dashboard />
            </center>
        </>
    )
}
export default Home;


 