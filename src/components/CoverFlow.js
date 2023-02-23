import { useState } from "react";
import {musicsList} from "utils/musicsList.js";
import Cover from "./Cover.js"

export default function CoverFlow() {
  const [musics, setMusics] = useState(musicsList);
  return (<>
  <div className="coverFlow" >
    <Cover className="cover left" details={musics[0]}></Cover>
    <Cover className="cover selected" details={musics[7]}></Cover>
    <Cover className="cover right" details={musics[1]}></Cover>
  </div>
  </>);
}
