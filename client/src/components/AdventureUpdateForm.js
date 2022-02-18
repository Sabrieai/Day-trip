import React from "react"
import useApplicationData from './../hooks/useApplicationData';

export default function AdventureForm() {
  const {
    postAdventure
  } = useApplicationData()
  return (
    <main className="adventure__form">
      <form onSubmit={event => event.preventDefault()}>
        <input className="adventure__title-input"
          type="text"
          placeholder="title"
        >
        </input>
        <input className="adventure__description-input"
          type="text"
          placeholder="description"
        >
        </input>
        <input className="adventure__thumbnail-input"
          type="text"
          placeholder="thumbnail"
        >
        </input>
        <input className="adventure__cover__photo-input"
          type="text"
          placeholder="cover photo"
        >
        </input>
        <input className="adventure__current__price-input"
          type="number"
          placeholder="current price"
        >
        </input>

        <input className="adventure__street-input"
          type="text"
          placeholder="street"
        >
        </input>
        <input className="adventure__city-input"
          type="text"
          placeholder="city"
        >
        </input>
        <input className="adventure__province__state-input"
          type="text"
          placeholder="province/state"
        >
        </input>
        <input className="adventure__postcode__zip-input"
          type="text"
          placeholder="postal code/zip"
        >
        </input>
        <input className="adventure__country-input"
          type="text"
          placeholder="country"
        >
        </input>
        <label for="accessible">Accessibility</label>
        <select name="accessible" id="access">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input className="adventure__description-input"
          type="text"
          placeholder="occupancy"
        >
        </input>
        <label for="lang">Category</label>
        <select name="category" id="lang">
          <option value="art">Art and Culture</option>
          <option value="food">Food and Drink</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="wellness">Wellness</option>
          <option value="tours">Tours</option>
          <option value="sightseeing">Sightseeing</option>
          <option value="nature">Nature and Outdoors</option>
        </select>
        <input className="adventure__description-input"
          type="text"
          placeholder="avatar"
        >
        </input>
        <input className="adventure__description-input"
          type="text"
          placeholder="first name"
        >
        </input>
        <input className="adventure__description-input"
          type="text"
          placeholder="last name"
        >
        </input>
        <label for="season">Season</label>
        <select name="seasons" id="lang">
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
      </form>

    </main>
  )
}
