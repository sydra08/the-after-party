import React from 'react';

// need to figure out how to handle the nested form parts - how do they get added to state and how does that translate into the json that's sent to the API?

const SuggestionForm = (props) => {
  console.log("SuggestionForm component")
  console.log(props)
  const { handleSubmit,name, handleNameChange, addressStreet, handleStreetChange, addressCity, handleCityChange, addressState,
  handleStateChange, category, handleCategoryChange, vote,   handleVoteChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            id="suggestion-name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <fieldset>
        <legend>Address</legend>
        <div>
          <label>
            Street:
            <input
              id="suggestion-address-street"
              name="street"
              type="text"
              value={addressStreet}
              onChange={handleStreetChange}
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              id="suggestion-address-city"
              name="city"
              type="text"
              value={addressCity}
              onChange={handleCityChange}
            />
          </label>
        </div>
        <div>
          <label>
            State:
            <input
              id="suggestion-address-state"
              name="state"
              type="text"
              value={addressState}
              onChange={handleStateChange}
            />
          </label>
        </div>
      </fieldset>
      <div>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="Fast Casual">Fast Casual</option>
            <option value="Beer Bar">Beer Bar</option>
            <option value="Cocktail Bar">Cocktail Bar</option>
            <option value="Fast Food">Fast Food</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Upvote/Downvote:
          <select value={vote} onChange={handleVoteChange}>
            <option value="upvote">Like</option>
            <option value="downvote">Dislike</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Submit Suggestion</button>
      </div>
    </form>
  );
}

export default SuggestionForm;
