import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import CategoryCard from "./CategoryCard";

//renders activities of a selected category
export default function Category() {
  const params = useParams();

  const { getCategory } = useApplicationData();
  const [categories, setCategory] = useState([]);
  useEffect(() => {

    getCategory(params.category)
      .then((data) => {
        setCategory(data);
      })
  }, [])

  const categoryList = categories.map((category, i) => {
    return (
      <CategoryCard
        key={i}
        city={category.city}
        photo={category.thumbnail_photo_url}
        title={category.title}
        id={category.id}
        price={category.curr_price}
        prev={category.prev_price}
        accessible={category.accessible}
      />
    )
  })

  return (
    <section>
      {categoryList}
    </section>
  )
}


