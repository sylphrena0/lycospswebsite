import React from "react";
import './Slideshow.css';
// import './Slideshow.css'

function ColloquiumSlides() {
    return (
      <div class="responsive-google-slides">
        <iframe name="col" title="Colloquium Title Slides" src="https://docs.google.com/presentation/d/e/2PACX-1vRFlqm9t3nJnAHVDY8jYPSs2g7o55tsv_9REPoLwuhDWrwODmfyp2097d2epBG_1tTdkgIDs51h_mo1/embed?start=true&loop=true&delayms=4000&rm=minimal" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

        <a class="prev" href="https://docs.google.com/presentation/d/e/2PACX-1vRFlqm9t3nJnAHVDY8jYPSs2g7o55tsv_9REPoLwuhDWrwODmfyp2097d2epBG_1tTdkgIDs51h_mo1/embed?start=true&loop=true&delayms=4000&rm=minimal#slide=previous" target="col">&#10094;</a>
        <a class="next" href="https://docs.google.com/presentation/d/e/2PACX-1vRFlqm9t3nJnAHVDY8jYPSs2g7o55tsv_9REPoLwuhDWrwODmfyp2097d2epBG_1tTdkgIDs51h_mo1/embed?start=true&loop=true&delayms=4000&rm=minimal#slide=next" target="col">&#10095;</a>
      </div>
    );
  }
  export default ColloquiumSlides;