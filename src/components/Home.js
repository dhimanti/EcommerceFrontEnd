import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Adjusted import statement

function Home() {
    const navigate = useNavigate();
   
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            try {
                const data = jwtDecode(token); // Adjusted function call
                // console.log(data);
                if(!data) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        } else {
            // console.log("No token Found")
            navigate('/login');
        }
    }, [navigate]);

    return(
        <>
            <center>
                <Dashboard />
            </center>
        </>
    );
}

export default Home;
