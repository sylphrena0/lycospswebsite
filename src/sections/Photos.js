import React from "react";
import './Slideshow.css';

function Photos() {
    return (
      <div class="responsive-google-slides">
        <iframe name="col" title="SPS Photos" src="https://docs.google.com/presentation/d/e/2PACX-1vQrJNj5sbY1zNx45txu-g82Y0WYy04cviZQ7hWHtOdHZCzRuAbWipBaWRIRlJeYZZK-SwBjXrrvkVhc/embed?start=true&loop=true&delayms=4000&rm=minimal" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

        <a class="prev" href="https://docs.google.com/presentation/d/e/2PACX-1vQrJNj5sbY1zNx45txu-g82Y0WYy04cviZQ7hWHtOdHZCzRuAbWipBaWRIRlJeYZZK-SwBjXrrvkVhc/embed?start=true&loop=true&delayms=4000&rm=minimal#slide=previous" target="col">&#10094;</a>
        <a class="next" href="https://docs.google.com/presentation/d/e/2PACX-1vQrJNj5sbY1zNx45txu-g82Y0WYy04cviZQ7hWHtOdHZCzRuAbWipBaWRIRlJeYZZK-SwBjXrrvkVhc/embed?start=true&loop=true&delayms=4000&rm=minimal#slide=next" target="col">&#10095;</a>
      </div>
    );
  }
  export default Photos;