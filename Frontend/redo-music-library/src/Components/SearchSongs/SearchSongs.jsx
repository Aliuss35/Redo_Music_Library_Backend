import { useState } from "react";

const SearchSongs = (props) => {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input
            type="text"
            onChange={(e) => props.searchResult(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchSongs;
