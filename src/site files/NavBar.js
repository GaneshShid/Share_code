import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
export const TopNavbar = () => {
    const [bgstyle] = useState({ "backgroundImage": "linear-gradient(to right, #7BD5F5, #e1effa)" })
    return (
        <div>
            <Navbar style={bgstyle} >
                <Container>
                    <Navbar.Brand href="#">
                        <h2>Project Name</h2>
                    </Navbar.Brand>
                    <div >
                        <input type="button" style={{"textDecoration": "none", "fontSize": "25px" }} className="btn btn-link mt-4 fs-4" value="Log Out" />
                    </div> 
                </Container>
            </Navbar>
        </div>
    )
}
