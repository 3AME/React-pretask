import UserCardItem from "./UserCardItem"
import './UsersCard.css'

const UsersCard = (props) => {
    // console.log("card",props.items)
    return (
        <ul className="user-ul">
            {props.items.map((item) => (
                <UserCardItem
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    website={item.website}
                    email = {item.email}
                    phone={item.phone}
                    company = {item.company}
                    street = {item.address.street}
                    suite = {item.address.suite}
                    city = {item.address.city}
                    zipcode = {item.address.zipcode}
                    item = {item}
                ></UserCardItem>
            ))}
            
        </ul>
    )
}

export default UsersCard;