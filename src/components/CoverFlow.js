import { useState, useEffect, useRef } from "react";
import {coversList} from "utils/coversList.js";

export default function CoverFlow() {
  const [covers, setCovers] = useState(coversList);
  const [selectedCover, setSelectedCover] = useState(covers[Math.floor((covers.length - 1) / 2)]);
  const selectedCoverRef = useRef();
  const coverFlowRef = useRef();

  useEffect(() => coverFlowRef.current.scrollTo(coverFlowRef.current.offsetWidth / 2, 0), [])

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

  const handleCoverClick = e => {
    const coverContainer = e.target.parentElement;
    coverFlowRef.current.scrollTo(coverContainer.getBoundingClientRect().x + coverContainer.offsetWidth / 2, 0);
    console.log(coverContainer)
  }

  return (<>
  <div className="cover-flow" onScroll={handleCoverFlowScroll} ref={coverFlowRef} >
    {covers.map((cover, index) => (
      <div
        key={cover.id}
        data-id={cover.id}
        ref={selectedCover.id === cover.id ? selectedCoverRef : null}
        className={`cover ${selectedCover.id === cover.id 
          ? "selected"
          : selectedCover.id > cover.id
            ? "left"
            : "right"}
        `}
        style={{ zIndex: selectedCover.id === cover.id
          ? covers.length + 1
          : selectedCover.id < cover.id
            ? covers.length - index
            : undefined
        }}
      >
        <img src={cover.cover} alt={`${cover.single} cover`} onClick={handleCoverClick} />
      </div>
    ))}
  </div>
  <div className="title">
    <h3>{selectedCover.single}<br/>{selectedCover.artist}</h3>
  </div>
  </>);
}