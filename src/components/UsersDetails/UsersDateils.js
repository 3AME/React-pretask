import UserDetails from "./UserDetails";
import '../UsersCard/UsersCard.css'

const UsersDetails = (props) => {
    // console.log("hi",props.items)
    return (
        <ul className="user-ul">
            {props.items.map((item) => (
                <UserDetails
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    website={item.website}
                    email = {item.email}
                    phone={item.phone}
                    company = {item.company.name}
                    street = {item.address.street}
                    suite = {item.address.suite}
                    city = {item.address.city}
                    zipcode = {item.address.zipcode}
                    // item = {item}
                ></UserDetails>
            ))}
            
        </ul>
    )
}

export default UsersDetails;