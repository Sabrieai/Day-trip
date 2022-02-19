import React, { useState, useEffect } from "react"
import useApplicationData from './../hooks/useApplicationData';
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";




export default function Myadventure() {
    const { getMyAdventures } = useApplicationData();
    const [myAdventures, setMyAdventures] = useState([]);
    const param = useParams();
    console.log("PARAM IN ADVENTURE", param)
    
    useEffect(() => {

        getMyAdventures(param.id)
            .then((data) => {
                console.log("MY ADVENTRUES COMPONENT", data)
                setMyAdventures(data);
            })
    }, [])

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