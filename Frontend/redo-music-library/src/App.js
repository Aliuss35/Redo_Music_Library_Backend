import { useEffect, useState } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSongs from "./Components/AddSongs/AddSongs";

function App() {
  const [songs, setSongs] = useState([]);
  const [testvar, setTestvar] = useState("Ali");
  useEffect(() => {
    getAllSongs();
  }, []);
  async function getAllSongs() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/songs/all/");
      setSongs(response.data);
      console.log(songs);
    } catch (error) {
      console.log("error");
    }
  }
  function passupfunction(ad) {
    console.log(ad);
  }
  return (
    <div>
      <DisplaySongs songList={songs} />
      <AddSongs songListe={passupfunction} />
    </div>
  );
}

export default App;
