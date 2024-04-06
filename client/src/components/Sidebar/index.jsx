import React from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, SunIcon } from "@chakra-ui/icons";
import {  MdKayaking, MdOutlineNordicWalking, MdOutlinePets, MdPerson3 } from "react-icons/md";
import '../../App.css';



const Sidebar = () => {
    return(
        <List
            color="white" 
            fontSize="20px" 
            spacing={4} 
            p={10} 
            backgroundColor="tan" 
            w={200} 
            className="NavBar"
            >
            <ListItem className="NavItem">
                <NavLink to = "/">
                    <ListIcon as={CalendarIcon} color ="white"/>
                    Home
                </NavLink>
            </ListItem>

            <ListItem className="NavItem">
                <NavLink to = "/Trails">
                <ListIcon as={MdOutlineNordicWalking} color ="white" className="NavTitle"/>
                    Trails
                </NavLink>
            </ListItem>

            <ListItem className="NavItem">
                <NavLink to = "/Wildlife">
                <ListIcon as={MdOutlinePets} color ="white"/>
                    Wildlife
                </NavLink>
            </ListItem>

            <ListItem className="NavItem">
                <NavLink to = "/VisitorAmenities">
                <ListIcon as={MdKayaking} color ="white"/>
                    Visitor Amenities
                </NavLink>
            </ListItem>

            <ListItem className="NavItem">
                <NavLink to = "/Profile">
                <ListIcon as={MdPerson3} color ="white"/>
                    Profile
                </NavLink>
            </ListItem>
        </List>
    )
};

export default Sidebar;