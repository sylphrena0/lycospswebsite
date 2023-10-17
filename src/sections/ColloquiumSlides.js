import React from "react";
import './Slideshow.css';
// import './Slideshow.css'

function ColloquiumSlides() {
    return (
      <div class="responsive-google-slides">
        <iframe name="col" title="Colloquium Title Slides" src="https://docs.google.com/presentation/d/e/2PACX-1vS6F2yCKPyd2egCFioWXyoWOahBw7we_Dxd3baW9MRerzuRBjHSsRaLvYidANlb2nO6GsJ2Alst3FD7/embed?start=true&loop=false&delayms=4000&rm=minimal" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

        <a class="prev" href="https://docs.google.com/presentation/d/e/2PACX-1vS6F2yCKPyd2egCFioWXyoWOahBw7we_Dxd3baW9MRerzuRBjHSsRaLvYidANlb2nO6GsJ2Alst3FD7/embed?start=true&loop=false&delayms=4000&rm=minimal#slide=previous" target="col">&#10094;</a>
        <a class="next" href="https://docs.google.com/presentation/d/e/2PACX-1vS6F2yCKPyd2egCFioWXyoWOahBw7we_Dxd3baW9MRerzuRBjHSsRaLvYidANlb2nO6GsJ2Alst3FD7/embed?start=true&loop=false&delayms=4000&rm=minimal#slide=next" target="col">&#10095;</a>
      </div>
    );
  }
  export default ColloquiumSlides;