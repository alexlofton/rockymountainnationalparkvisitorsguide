import React from "react";
import { List, ListIcon, ListItem, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, UnlockIcon } from "@chakra-ui/icons";
import { MdKayaking, MdOutlineNordicWalking, MdOutlinePets, MdPerson3 } from "react-icons/md";
import Auth from '../../utils/auth';
import '../../App.css';



const Sidebar = () => {

    const handleLogout = () => {
        Auth.logout();
        window.location.href = '/';
    };

    return (
        <List
            color="white"
            fontSize="20px"
            spacing={4}
            p={10}
            backgroundColor="rgb(170, 141, 79)"
            w={200}
            height="100vh"
            className="NavBar"
        >
            <ListItem className="NavItem">
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} color="white" />
                    Home
                </NavLink>
            </ListItem>

            {Auth.loggedIn() && (
                <>
                    <ListItem className="NavItem">
                        <NavLink to="/Trails">
                            <ListIcon as={MdOutlineNordicWalking} color="white" className="NavTitle" />
                            Trails
                        </NavLink>
                    </ListItem>

                    <ListItem className="NavItem">
                        <NavLink to="/Wildlife">
                            <ListIcon as={MdOutlinePets} color="white" />
                            Wildlife
                        </NavLink>
                    </ListItem>

                    <ListItem className="NavItem">
                        <NavLink to="/VisitorAmenities">
                            <ListIcon as={MdKayaking} color="white" />
                            Visitor Amenities
                        </NavLink>
                    </ListItem>
                </>
            )}

            <ListItem className="NavItem">
                <NavLink to="/Profile">
                    <ListIcon as={MdPerson3} color="white" />
                    Profile
                </NavLink>
            </ListItem>

            {Auth.loggedIn() && (
                <ListItem className="NavItem" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <ListIcon as={UnlockIcon} color="white" />
                    Log Out
                </ListItem>
            )}
        </List>
    )
};

export default Sidebar;
