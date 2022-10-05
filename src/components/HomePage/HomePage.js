import Card from '../UI/Card';
import { useEffect, useState } from 'react';
import UsersCard from "../UsersCard/UsersCard";

import { getList } from '../UsersCard/UsersList';
import "./HomePage.css"

function HomePage() {
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        let mounted = true;
        getList().then(items => {
            if (mounted) {
                setUsersList(items)
            }
        })
        return () => mounted = false
    }, [])
    return (<div>
        <h1>Hey, Here is users' list</h1>
        
        <Card className="home-card">
            <UsersCard items={usersList}></UsersCard>
        </Card>
        {/* <Card className="home-card">
            <UsersDetails items={usersList}></UsersDetails>
        </Card> */}
       

    </div>)
}

export default HomePage;