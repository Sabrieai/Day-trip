import React from "react"
import "./CategoriesList.css"

export default function CategoriesList() {
  return (

    <div className="category-list-container">
      <h2 className="header-categories">Categories</h2>

      <ul className="category-row">
        <li>
          <a className="category-link" href="category/food">Food and Drink</a>
        </li>
        <li>
          <a className="category-link" href="category/culture">Art and Culture</a>
        </li>
        <li>
          <a className="category-link" href="category/sports">Sports</a>
        </li>
        <li>
          <a className="category-link" href="category/entertainment">Entertainment</a>
        </li>
      </ul>

      <ul className="category-row">
        <li>
          <a className="category-link" href="category/wellness">Wellness</a>
        </li>
        <li>
          <a className="category-link" href="category/tours">Tours</a>
        </li>
        <li>
          <a className="category-link" href="category/sightseeing">Sightseeing</a>
        </li>
        <li>
          <a className="category-link" href="category/outdoors">Nature and Outdoors</a>
        </li>
      </ul>

      <ul className="category-row">
        <li>
          <a className="category-link" href="season/spring">Spring</a>
        </li>
        <li>
          <a className="category-link" href="season/summer">Summer</a>
        </li>
        <li>
          <a className="category-link" href="season/fall">Fall</a>
        </li>
        <li>
          <a className="category-link" href="season/winter">Winter</a>
        </li>
      </ul>


    </div>)
}