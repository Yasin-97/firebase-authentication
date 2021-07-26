import React,{useState} from 'react'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {NavLink} from  'react-router-dom'



function NavLinkOption(prop){
    const [showTooltip, setShowTooltip] = React.useState(false);
return (
    <OverlayTrigger
    show={showTooltip}
    
    delay={{ show: 250, hide: 400 }}
    trigger='hover'
     overlay={<Tooltip id="tooltip-top">Just demo!</Tooltip>}
   >
     <NavLink
       to={"/dashboard"}
       className="nav-link"
       onClick={(e) => {
         e.preventDefault();
         setShowTooltip(!showTooltip);
         setTimeout(()=>setShowTooltip(()=>false),1500) 

       }}
     >
       <i className={prop.icon} />
       <p>{ prop.name}</p>
     </NavLink>
   </OverlayTrigger>
)
}

export default NavLinkOption