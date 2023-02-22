import { useState } from "react";
import { Box } from "@chakra-ui/react";
import "@/styles/Musics.module.css";
import Music from "./Music.js";

export default function Musics() {
  const [musics, setMusics] = useState([
    {
      single: "Sunday Bloody Sunday",
      artist: "U2",
      cover: "/U2_Sunday_Bloody_Sunday_cover.png",
      id: 0,
    },
    {
      single: "Yellow Submarine",
      artist: "The Beatles",
      cover: "/Yellow_Submarine_cover.png",
      id: 1,
    },
    {
      single: "Grace Kelly",
      artist: "Mika",
      cover: "/life_in_a_cartoon_cover.png",
      id: 2,
    },
    {
      single: "Are You Experienced",
      artist: "Jimi Hendrix",
      cover: "/are_you_experienced.png",
      id: 3,
    },
    {
      single: "Billie Jean",
      artist: "Michael Jackson",
      cover: "/billie_jean.png",
      id: 4,
    },
    {
      single: "Bohemain Rhapsody",
      artist: "Mika",
      cover: "/bohemian_rhapsody.png",
      id: 5,
    },
    {
      single: "Viva La Vida",
      artist: "Coldplay",
      cover: "/viva_la_vida.png",
      id: 6,
    },
    {
      single: "Under Pressure",
      artist: "David Bowie and Queen",
      cover: "/under_pressure.png",
      id: 7,
    },
  ]);

  return (
    <>
      <Box display="flex" alignItems="baseline" className="scrollable-section">
        {musics.map((music) => (
          <Music key={music.id} {...music}></Music>
        ))}
      </Box>
    </>
  );
}
