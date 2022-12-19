import React, { useState } from "react";
import Papa from "papaparse";
import './SigmaPiSigma.css';

const MembersData = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTXVM3d-bI9G3jsR8FovE4elY85RJK_xqukAQlgZfr05T9A_nH9-Bb8UcZa8VTyZmWBk6wTW8wZigX1/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const members = Array.from(data);
  return (
    <div>
      <div class="main-content">
        <h2 id="sigmatitle" >Sigma Pi Sigma Honor Society Members</h2>
        <table className="”sortable”" id="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Member Number</th>
              <th className="sorttable_nosort">Position</th>
              <th>Date of Induction</th>
            </tr>
          </thead>
          <tbody>{members.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>{data.position}</td>
              <td>{data.date}</td>
            </tr>))}
          </tbody>
          <tfoot></tfoot></table>
      </div>
    </div>
  );
}
export default MembersData;
