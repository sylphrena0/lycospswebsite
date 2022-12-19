import React from "react";

function ZoneMeeting() {
    return (
      <div>
        <div class="main-content">
          <h2 class="header">SPS Zone Meeting at Lycoming College</h2>
          <p>SPS Lycoming is delighted to host the 2022-23 SPS Zone 3 Meeting and we are looking forward to hosting your chapters! The meeting will be held on Saturday, February 25th, from 8:00am to 9:00pm. We encourage folks to arrive Friday, February 24th to settle in and enjoy light refreshments and a fun activity. Please visit this link (to-add) to RSVP, all attendees must RSVP by February 1st, 2023.</p>

          <span>We've included directions to Lycoming College below, along with a campus map and housing information. Our tentative itinerary is listed below and will be finalized before the registration deadline. If you have any questions about the meeting or logistics, please email the Lycoming SPS Executive Board at <a href="mailto:sps@lycoming.edu?subject=SPS Zone Meeting">sps@lycoming.edu.</a></span>

          <table class="”sortable”" id="striped" style={{marginTop: 55 + "px"}}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th class="sorttable_nosort">Event</th>
                <th>Location</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody class="output">
            <tr>
              <td>Friday</td>
              <td>6:00pm-9:00pm</td>
              <td>Registration Opens</td>
              <td>Pennington Plaza</td>
              <td></td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>8:00pm-10:00pm</td>
              <td>Bad Physics Movie</td>
              <td>The Den, Snowden Library</td>
              <td></td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>9:00am-10:00am</td>
              <td>Breakfast</td>
              <td>Heim G09</td>
              <td></td>
            </tr>
            </tbody>
            <tfoot></tfoot></table>
        </div>
      </div>
    );
  }
  export default ZoneMeeting;