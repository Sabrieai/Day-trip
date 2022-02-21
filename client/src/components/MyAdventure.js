import React, { useState, useEffect, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import { useLocation } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { userContext } from '../providers/UserProvider';




export default function Myadventure() {
    const { getMyAdventures } = useApplicationData();
    const [myAdventures, setMyAdventures] = useState([]);
    const { user} = useContext(userContext);

    const {state} = useLocation();
    console.log(state,`STATE`)
    
    useEffect(() => {
        if(user.id) {
        getMyAdventures(user.id)
            .then((data) => {
                console.log("MY ADVENTRUES COMPONENT", data)
                setMyAdventures(data);
            })
        }
    }, [user.id])

    // useEffect(() => {
    //     if(state === true) {
    //         window.location.reload();
    //     }
    // }, [])

    //trigger reload when useNavigate
    const adventureList = myAdventures.map((adventure, i) => {
        console.log(adventure);
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