import Card from "../UI/Card";
// import Link from "@mui/material/Link"
import Button from "../UI/Button";
import './UserCardItem.css'
import { Avatar } from "@mui/material";
import UserDetails from "../UsersDetails/UserDetails";
import { Routes, Route, Link } from 'react-router-dom';


const UserCardItem = (props) => {
    // console.log(props.item)
    return (
        <li className="user-card">
            <Card className="user-card-item">
                <div className="user-card-avatar"><Avatar sx={{ width: 100, height: 100, backgroundColor: "#8d38e340" }}>{props.name[0]}</Avatar></div>
                <div className="user-card-name">{props.name}</div>
                <div className="user-card-name">@{props.username}</div>
                <Link href={props.website}>{props.website}</Link>
                <Link to="/userDetails"><Button>More Details</Button></Link>
                <Routes>
                    <Route exact path='/userDetails' element={< UserDetails item={props.item} />}></Route>
                </Routes>
            </Card>
        </li>
    )
}


export default UserCardItem;