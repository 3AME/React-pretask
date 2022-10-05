import React from "react";
import Link from "@mui/material/Link"
// import "./UserDetails.css"

const UserDetails = (props) => {
    // console.log(props.name);
    return (<li>
        <h2>Here is user details</h2>
        <div className="user-card-name">Name: {props.name}</div>
        <div className="user-card-name">Username: @{props.username}</div>
        <div className="user-card-name">Email: {props.email}</div>
        <div className="user-card-name">Phone: {props.phone}</div>
        <div className="user-card-name">Company: {props.company}</div>
        <Link href={props.website}>Website: {props.website}</Link>
        <div className="user-card-name">Street: {props.street}</div>
        <div className="user-card-name">Suite: {props.suite}</div>
        <div className="user-card-name">City: {props.city}</div>
        <div className="user-card-name">Zipcode: {props.zipcode}</div>
    </li>)
}

export default UserDetails;