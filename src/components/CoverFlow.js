import { useState, useEffect, useRef } from "react";
import {coversList} from "utils/coversList.js";
import Cover from "./Cover.js"

export default function CoverFlow() {
  const coverFlowRef = useRef();
  const [covers, setCovers] = useState(coversList);
  const [selectedCover, setSelectedCover] = useState(covers[Math.floor((covers.length - 1) / 2)]);
  const selectedCoverRef = useRef();

  // useEffect(() => coverFlowRef.current.scrollTo(coverFlowRef.current.offsetWidth / 2, 0), []);

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
    // const coverContainer = e.target.parentElement;
    // coverFlowRef.current.scrollTo(coverContainer.getBoundingClientRect().x + coverContainer.offsetWidth / 2, 0);
    // console.log(coverContainer)
    return
  }

  return (
  <div className="cover-flow-container" >
    <div className="cover-flow" onScroll={handleCoverFlowScroll} ref={coverFlowRef} >
      {covers.map((cover, index) => (
        <Cover 
          key={cover.id}
          details={cover}
          className={
            selectedCover.id === cover.id 
              ? "cover selected"
              : selectedCover.id > cover.id
                ? "cover left"
                : "cover right"
            }
          ref={selectedCover.id === cover.id ? selectedCoverRef : null}
          zIndex={
            selectedCover.id === cover.id
            ? covers.length + 1
            : selectedCover.id < cover.id
              ? covers.length - index
              : undefined
          }
          handleCoverClick={handleCoverClick}
        />
      ))}
    </div>
    <div className="title-wrapper" style={{zIndex: covers.length + 1}}>
        <h5 className="title">{selectedCover.single}<br/>{selectedCover.artist}</h5>
    </div>
  </div>);
}