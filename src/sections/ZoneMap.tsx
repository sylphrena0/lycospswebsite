import React from 'react';
import campusMap from '../images/campusmap.png';
import './ZoneMeeting.css';



function ZoneMap() {
  return (
    <div className="darkdiv">
      <div className="main-content">
        <h2 id="sigmatitle">Campus Map & Directions</h2>
        <img id="campus-map" src={campusMap} alt="Lycoming College" />
        <span id='zone-meeting'>Lycoming College is located at One College Place, Williamsport, PA 17701. You can navigate to the college with <a href="https://www.google.com/maps/place/Lycoming+College/@41.2446303,-77.0004581,17z/data=!3m1!4b1!4m5!3m4!1s0x89cfa619f485b457:0xe4a2708c522482c9!8m2!3d41.2446263!4d-76.9982694">your preferred map service,</a> or follow <a href="https://www.lycoming.edu/admissions/visit/directions.aspx">the written directions</a> compiled by our admissions department. One you arrive, you may park in visitor parking at the Academic Center, marked on the map above with "Park Here." Registration will be held in Pennington Lounge, which is just inside the Academic Center.</span>
      </div>
    </div>
  );
}
export default ZoneMap;