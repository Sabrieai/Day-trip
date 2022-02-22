import React, { useState, useEffect, useContext} from "react"
import useApplicationData from './../hooks/useApplicationData';
import { useLocation } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { userContext } from '../providers/UserProvider';




export default function Myadventure() {
    const { getMyAdventures } = useApplicationData();
    const [myAdventures, setMyAdventures] = useState([]);
    const { user } = useContext(userContext);

    const { state } = useLocation();
    const [reload, setReload] = useState(false)

    console.log(state, `STATE`)
    console.log(reload, `RELOAD`)


    useEffect(() => {

        if (state === true) {
            setReload(state);
            console.log(`IN IF`)
        }

        console.log(`IN USE EFFECT`)
    }, [state])

    const getAdventuresData = async (id) => {
        try {
            const results = await getMyAdventures(id);
            console.log(`RESULTS`, results)
            setMyAdventures(results);   
        } catch (error) {
            throw new Error(`Something bad happened`)
        }
        

    }

    useEffect(() => {

        if (user.id) {
        
            getAdventuresData(user.id)
            console.log(`USE EFFECT FIRING`)
        }
    }, [user.id])

    const adventureList = myAdventures.length ? myAdventures.map((adventure, i) => {
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
    }) : [];


    return (

        <>
            <h1>MY ADVENTURES</h1>
            {adventureList}
        </>
    )
}