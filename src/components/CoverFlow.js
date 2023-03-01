import { useState, useEffect, useRef } from "react";
import {coversList} from "utils/coversList.js";

export default function CoverFlow() {
  const [covers, setCovers] = useState(coversList);
  const [selectedCover, setSelectedCover] = useState({
    single: "Are You Experienced",
    artist: "Jimi Hendrix",
    cover: "/are_you_experienced.png",
    id: 2
  });
  const selectedCoverRef = useRef();
  const coverFlowRef = useRef();

  const handleCoverFlowScroll = () => {
    let closestDistance = Infinity;
    let closestCover = null;
    covers.forEach(cover => {
      const coverContainer = coverFlowRef.current.querySelector(`[data-id="${cover.id}"]`);
      const distance = Math.abs( coverFlowRef.current.offsetWidth / 2 - coverContainer.offsetWidth / 2 - coverContainer.getBoundingClientRect().x);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestCover = cover;
      }
    })
    setSelectedCover(closestCover);
  }


  return (<>
  <div className="cover-flow" onScroll={handleCoverFlowScroll} ref={coverFlowRef} >
    {covers.map(cover => (
      <div
        key={cover.id}
        data-id={cover.id}
        ref={selectedCover?.id === cover.id ? selectedCoverRef : null}
        className={`cover ${selectedCover?.id === cover.id 
          ? "selected"
          : (selectedCover?.id > cover.id ? "left" : "right")}
        `}
      >
        <img src={cover.cover} alt={`${cover.single} cover`} />
      </div>
    ))}
  </div>
  <div className="title">
    <h3>{selectedCover?.single}<br/>{selectedCover?.artist}</h3>
  </div>
  </>);
}
