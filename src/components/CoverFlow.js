import { useState } from "react";
import {musicsList} from "utils/musicsList.js";
import Cover from "./Cover.js"

export default function CoverFlow() {
  const [musics, setMusics] = useState(musicsList);
  const [selectedIndex, setSelectedIndex] = useState(Math.floor((musics.length - 1) / 2));
  const selectedMusic = musics[selectedIndex];

  const handlePreviousCLick = () => setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
  const handleNextCLick = () => setSelectedIndex(prev => prev < musics.length - 1 ? prev + 1 : prev);


  return (<>
    <div className="cover-flow" >
      <div className="cover-flow-left">
        {musics.map((music, index) => {
          if (index < selectedIndex) {
            return <Cover key={index} className="cover left" details={music} />;
          } else {
            return null;
          }
          })}
      </div>
      <div className="cover-flow-selected">
        <Cover className="cover selected" details={selectedMusic} />
      </div>
      <div className="cover-flow-right">
        {musics.map((music, index) => {
          if (index > selectedIndex) {
            return <Cover key={index} className="cover right" details={music} />;
          } else {
            return null;
          }
        })}
      </div>
  </div>
  <div className="title">
    <h3>{selectedMusic.single}<br/>{selectedMusic.artist}</h3>
  </div>


    <div display="flex">
      <button onClick={handlePreviousCLick} >Previous</button>
      <button onClick={handleNextCLick} >Next</button>
    </div>
  </>);
}
