import React, { useState } from "react";
import Papa from "papaparse";
import './SigmaPiSigma.css';
import {Helmet} from "react-helmet";

function MembersData() {
  return (

      <div>
            <Helmet>
                <script src={'SigmaPiSigmaStaticFetch.js'} />
            </Helmet>
        <div class="main-content">
          <h2 id="sigmatitle" >Sigma Pi Sigma Honor Society Members</h2>
          <table class="”sortable”" id="striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Member Number</th>
                <th class="sorttable_nosort">Position</th>
                <th>Date of Induction</th>
              </tr>
            </thead>
            <tbody class="output">
            </tbody>
            <tfoot></tfoot></table>
        </div>
        {/* <script src="static/SigmaPiSigmaStaticFetch.js" /> */}
      </div>
  );
}


export default MembersData;
