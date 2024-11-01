import React from 'react';
// import Papa from "papaparse";
import { graphql, useStaticQuery } from 'gatsby';
import './SigmaPiSigma.css';

function MembersData() {
  const data = useStaticQuery(graphql`
    query {
      allGoogleMembersSheet {
        nodes {
          name
          number
          position
          date
        }
      }
    }
  `);

  const members: {
    name: string
    number: number
    position: string
    date: string
  }[] = data.allGoogleMembersSheet.nodes;


  return (

    <div>

      <div className="main-content main-content-table">
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
          <tbody className="output">
            {members.map((member) => (
              <tr key={member.number}>
                <td>{member.name}</td>
                <td>{member.number}</td>
                <td>{member.position}</td>
                <td>{member.date}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot></table>
      </div>
      {/* <script src="static/SigmaPiSigmaStaticFetch.ts" /> */}
    </div>
  );
}


export default MembersData;
