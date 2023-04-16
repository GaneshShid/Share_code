import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { TopNavbar } from "./NavBar";
import { Tnav } from "./Topnav";
import "./all.css"
export const Sidenav = () => {
    // const [divstyle]=useState({"backgroundColor":"#7BD5F5"})
    const [txtsytyle] = useState({ "paddingLeft": 40, "textDecoration": "none" })
    return (
        <div>
            <Tnav />
            <div className="row">
                <div className="col-md-3"  >
                    <div className="col-md-8" >
                        <ListGroup className="mt-4">
                            <ListGroup.Item className="mt-4 ha"><Link to="home" className="fs-5" style={txtsytyle}><span><i class="fa-solid fa-house fa-lg"></i>  Home</span></Link></ListGroup.Item>
                            <ListGroup.Item className="mt-4 hb"><Link to="codes" className="fs-5" style={txtsytyle}><span><i class="fa-solid fa-code"></i>  Codes</span></Link></ListGroup.Item>
                            <ListGroup.Item className="mt-4 hc"><Link to="openings" className="fs-5" style={txtsytyle}><span><i class="fa-solid fa-user-tie fa-lg"></i>  Openings</span></Link></ListGroup.Item>
                            <ListGroup.Item className="mt-4 mb-4 hd"><Link to="messages" className="fs-5" style={txtsytyle}><span><i class="fa-solid fa-message fa-lg"></i>  Messages</span></Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-4" ></div>
                </div>
                <div className="col-md-1" >

                </div>
                <div className="col-md-7">
                    <Outlet />
                </div>
                <div className="col-md-1" >

                </div>
            </div>

        </div>
    )
}