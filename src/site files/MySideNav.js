import React from "react"
// import SideNav,{Toggle,NavItem,NavIcon,NavText} from "@trendmicro/react-sidenav"
// import "@trendmicro/react-sidenav/dist/react-sidenav.css"
// import '../App.css'
// import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css" 
export const MySideNav = () => {
    //const Navigate=useNavigate();
    const [bgstyle] = useState({"backgroundImage": "linear-gradient(to right, #7BD5F5, #e1eff)" })

    return (
        <div >
            <div className="container-fluid" >
                <div className="row flex-nowrap">
                    <div className=" col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between" style={bgstyle} >
                        <div className="p-2" style={bgstyle}>
                            <a className="d-flex mt-1 text-decoration-none align-items-center text-white" >
                                <span className="fs-4 d-none d-sm-inline mb-3" >SideMenu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mt-2" >
                                <li className="nav-item py-2 py-sm-0" >
                                    <a href="#" className="nav-link text-white">
                                    <i className="fa-sharp fa-solid fa-house fa-lg"></i><span className="ms-2 fs-4 d-none d-sm-inline" >Home</span>
                                    </a>
                                </li>
                                <li className="nav-item py-2 py-sm-0" >
                                    <a href="#" className="nav-link text-white">
                                    <i className="fa-solid fa-code fa-lg"></i><span className="ms-2 fs-4 d-none d-sm-inline" >Codes</span>
                                    </a>                                
                                </li>
                                <li className="nav-item py-2 py-sm-0" >
                                    <a href="#" className="nav-link text-white">
                                    <i className="fa-solid fa-user-tie fa-lg"></i><span className="ms-2 fs-4 d-none d-sm-inline" >Openings</span>
                                    </a>                                
                                </li>
                                <li className="nav-item py-2 py-sm-0" >
                                    <a href="#" className="nav-link text-white">
                                    <i className="fa-solid fa-message fa-lg"></i><span className=" ms-2 fs-4 d-none d-sm-inline" >Messages</span>
                                    </a>                                
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    {/* <div className="p-3" >
                            <h2>Content Area</h2>
                        </div> */}
                </div>
            </div>
            {/* <SideNav style={{backgroundColor:"#88038a"} } 
        onSelect={selected=>{
            console.log(selected);
            Navigate("/"+selected)
        }}
         >
            <SideNav.Toggle/>
            <SideNav.Nav  defaultSelected="home"> 
            eventkey to get selected message on click of that icon
                <NavItem eventKey="Home">  
                    <NavIcon><i className="fa fa-fw fa-home" style={{fontSize:"1.5em"}} /></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="Messages">
                    <NavIcon ><i className="fa-solid fa-message" style={{fontSize:"1.5em"}}/> </NavIcon>
                    <NavText>Messages</NavText>
                </NavItem>
                <NavItem eventKey="Openings">
                    <NavIcon ><i className="fa-solid fa-user-tie" style={{fontSize:"1.5em"}}></i></NavIcon>
                    <NavText>Openings</NavText>
                </NavItem>
                <NavItem eventKey="Codes">
                    <NavIcon ><i className="fa-solid fa-code " style={{fontSize:"1.5em"}}/></NavIcon>
                    <NavText>Codes</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav> */}


        </div>
    )
}