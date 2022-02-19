import React, { useState, useEffect, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { userContext } from '../providers/UserProvider';




export default function Myadventure() {
    const { getMyAdventures } = useApplicationData();
    const [myAdventures, setMyAdventures] = useState([]);
    const { user} = useContext(userContext);
    
    useEffect(() => {
        if(user.id) {
        getMyAdventures(user.id)
            .then((data) => {
                console.log("MY ADVENTRUES COMPONENT", data)
                setMyAdventures(data);
            })
        }
    }, [user.id])

    const adventureList = myAdventures.map((adventure, i) => {
        return (
            <CategoryCard
                key={i}
                city={adventure.city}
                photo={adventure.thumbnail_photo_url}
                title={adventure.title}
                id={adventure.id}
                price={adventure.curr_price}
            />
        )
    })


    return (

        <>
            <h1>MY ADVENTURES</h1>
            {adventureList}
        </>
    )
}