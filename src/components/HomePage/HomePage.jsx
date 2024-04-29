import React from "react";
import Navbar from "..//Navbar/Navbar";
import Hero from "../Hero/Hero";
import { useState, useEffect } from "react";
import {
    fetchTopAlbum,
    fetchNewAlbum,
    fetchSongs,
    fetchGenres,
  } from "../../BackendAPI/Api";
import sectionStyles from "../Section/section.module.css";
import Section from "../Section/Section";


function HomePage() {

    let [topAlbum, setTopAlbum] = useState([]);
    let [newAlbum, setNewAlbum] = useState([]);
    let [songs, setSongs] = useState([]);
    let [genres, setGeneres] = useState([]);
    useEffect(() => {
      (async () => {
        let topAlbumData = await fetchTopAlbum();
        setTopAlbum(topAlbumData);
  
        let newAlbumData = await fetchNewAlbum();
        setNewAlbum(newAlbumData);
  
        let fetchSongsData = await fetchSongs();
        setSongs(fetchSongsData);
  
        let fetchSongsGenere = await fetchGenres();
        setGeneres(fetchSongsGenere.data);
      })();
    }, []);
  
  return (
    <div>
      <Navbar data={topAlbum.concat(newAlbum)} page={"home"} />
      <Hero />
      <div className={sectionStyles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbum} type="album" />
        <Section title="New Albums" data={newAlbum} type="album" />
        <hr />
        <Section title="Songs" data={songs} type="songs" genres={genres} />{" "}
        <hr />
      </div>{" "}
    </div>
  );
}

export default HomePage;
