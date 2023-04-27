import axios from "axios";
import React, { Component, useState } from "react";
import SearchSongs from "../SearchSongs/SearchSongs";
import "./DisplaySongs.css";
const DisplaySongs = (props) => {
  const [searchResult, setSearchResult] = useState("");
  let example = {
    title: "Gurbet",
    artist: "Ozdemir Erdogan",
    album: "Memleket",
    release_date: "2002-01-07",
    genre: "Anadolu Rock",
  };
  // const [example2, setExample2] = useState([]);

  // function handleSubmit() {
  //   let newentry = {
  //     title: example.title,
  //     artist: example.artist,
  //     album: example.album,
  //     release_date: example.release_date,
  //     genre: example.genre,
  //   };
  //   addSong(newentry);
  // }
  // async function addSong(als) {
  //   console.log(als + "heyyy");
  //   try {
  //     let response = await axios.post("http://127.0.0.1:8000/songs/post/", als);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }
  async function updateSongs(exampler) {
    try {
      let response = await axios.put(
        `http://127.0.0.1:8000/songs/update/${exampler}/`,
        example
      );
      console.log(response.data);
      console.log(exampler);
    } catch (error) {
      console.log("error");
    }
  }
  function searchText(res) {
    setSearchResult(res);
    console.log(searchResult);
  }
  async function deleteSong(exampler2) {
    try {
      let response = await axios.delete(
        `http://127.0.0.1:8000/songs/delete/${exampler2}/`
      );
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div className="container">
      <SearchSongs searchResult={searchText} />
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <td className="header__item">{"Title"}</td>
            <td className="header__item">{"Artist"}</td>
            <td className="header__item">{"Album"}</td>
            <td className="header__item">{"Release Date"}</td>
            <td className="header__item">{"Genre"}</td>
            <td className="header__item">Edit</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.songList
            .filter((item) => {
              return searchResult.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(searchResult);
            })
            .map((song) => {
              return (
                <tr className="table-row">
                  <td className="table-data">{song.title}</td>
                  <td className="table-data">{song.artist}</td>
                  <td className="table-data">{song.album}</td>
                  <td className="table-data">{song.release_date}</td>
                  <td className="table-data">{song.genre}</td>
                  <td className="table-data">
                    <button onClick={() => updateSongs(song.id)}></button>
                    <button onClick={() => deleteSong(song.id)}></button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <form onSubmit={handleSubmit}>
        <h1></h1>
        <label htmlFor="">
          <input
            type="text"
            // value={example2}
            // onChange={(e) => setExample2(e.target.value)}
          />
        </label>
        <button type="submit" />
      </form> */}
    </div>
  );
};

export default DisplaySongs;
