import axios from "axios";
import { useState } from "react";

const AddSongs = (props) => {
  let asdf = "HAHA";
  let example = {
    title: "Gurbet2",
    artist: "Ozdemir Erdogan",
    album: "Memleket",
    release_date: "2002-01-07",
    genre: "Anadolu Rock",
  };
  const [example2, setExample2] = useState({
    title: "hf",
    artist: "jgv",
    album: "ghc",
    release_date: "2012-02-02",
    genre: "rock",
  });
  // const [example2, setExample2] = useState([]);
  function handleChange(evt) {
    const value = evt.target.value;
    setExample2({
      ...example2,
      [evt.target.name]: value,
    });
  }
  function handleSubmit() {
    let newentrye = {
      title: example2.title,
      artist: example2.artist,
      album: example2.album,
      release_date: example2.release_date,
      genre: example2.genre,
    };
    console.log(newentrye);
    addSong(newentrye);
  }
  async function addSong(alse) {
    console.log(alse + "heyyy");
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/songs/post-song/",
        alse
      );
      console.log(response.data);
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Title:
          <input
            type="text"
            name="title"
            value={example2.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Artist:
          <input
            type="text"
            name="artist"
            value={example2.artist}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="">
          Album:
          <input
            type="text"
            name="album"
            value={example2.album}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Release Date:
          <input
            type="date"
            name="release_date"
            value={example2.release_date}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Genre:
          <input
            type="text"
            name="genre"
            value={example2.genre}
            onChange={handleChange}
          />
        </label>
        <button type="submit">ADD</button>
      </form>
      {/* // <form onSubmit={handleSubmit}>
      //   <h1>ay</h1>
      //   <label htmlFor="">
      //     <input
      //       type="text"
      //       // value={example2}
      //       // onChange={(e) => setExample2(e.target.value)}
      //     />
      //   </label>
      //   <button type="submit" />
      // </form> */}
      {console.log(example2)}
    </div>
  );
};

export default AddSongs;
