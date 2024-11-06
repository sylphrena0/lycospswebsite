import { graphql, useStaticQuery } from 'gatsby';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import './SigmaPiSigma.css';

/** Public URL to published members data google sheets for papaparse. */
const GOOGLE_SHEET_CSV_URL: string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTXVM3d-bI9G3jsR8FovE4elY85RJK_xqukAQlgZfr05T9A_nH9-Bb8UcZa8VTyZmWBk6wTW8wZigX1/pub?output=csv';

interface Member {
  name: string;
  number: number;
  position: string;
  date: string;
}

function MembersData() {
  /** 
   * Initial member data queried with graphql using gatsby-source-google-spreadsheets at build time.
   * This is a backup in case the spreadsheet is not accessible for any reason. 
   * It is static and will not update after the webmaster builds the site.
   * 
   * @note google-sheets-worker-credentials.json must be in the root directory of the project at build time to get the initial data. 
   * See [Gatsby Configuration](../../gatsby-config.ts) for more information on the credentials and plugin configuration.
   */
  const initialMemberData: Member[] = useStaticQuery(graphql`
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
  `).allGoogleMembersSheet.nodes;

  const [members, setMembers] = useState<Member[]>(initialMemberData); // member data, initially set to the static data
  const [updateFailed, setUpdateFailed] = useState(false); // flag to indicate if the update failed

  // Update with the latest member data from the Google Sheet using papaparse when the component mounts (when the page loads)
  useEffect(() => {
    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results: { data: Member[] | undefined; }) => {
        if (results.data?.length) {
          setMembers(results.data);
        } else {
          setUpdateFailed(true);
          console.error(`Error parsing CSV file: no data found: ${JSON.stringify(results)}`);
        }
      },
      error: (error: Error) => {
        setUpdateFailed(true);
        console.error(`Error parsing CSV file: ${JSON.stringify(error)}`);
      },
    });
  }, []);

  return (
    <div>
      <div className="main-content main-content-table">
        <h2 id="members-title">Sigma Pi Sigma Honor Society Members</h2>
        {updateFailed && (<h3 id='members-update-failed'>Unable to update member data. If this message persists, please <a href='/contact'>contact the webmaster.</a></h3>)}
        <table className="sortable" id="striped">
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
        </table>
      </div>
    </div>
  );
}

export default MembersData;