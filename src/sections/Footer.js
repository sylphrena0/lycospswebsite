import React from 'react';
import './Footer.css';
import Subscribe from '../components/Subscribe';
import { Link } from 'gatsby';
 
function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Join our email list!
        </p>
        <div className='input-areas'>
          <Subscribe />
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Chapter</h2>
            <Link to='/history'>History</Link>
            <Link to='/sigmapisigma'>Our Alumni</Link>
            <Link to='/photos'>Photos</Link>
             <Link to='/contact'>Contact Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SPS National</h2>
            <a href='https://www.spsnational.org/'>National Website</a>
            <a href='https://discordapp.com/invite/WcGrAcx'>National Discord</a>
            <a href='https://www.spsnational.org/about/membership/benefits-sps-national-membership'>Membership</a>
            <a href='https://www.spsnational.org/awards/scholarships'>Scholarships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Related Links</h2>
            <nobr><a title="The American Institute of Physics" href='https://www.aip.org/'>AIP</a> / <a title="American Physical Society" href='https://www.aps.org/'>APS</a></nobr>
            <nobr><a title="American Association for the Advancement of Science" href='https://www.aaas.org/'>AAAS</a> / <a title="American Astronomical Society" href='https://aas.org/'>AAS</a></nobr>
            <nobr><a title="National Society of Black Physicists" href='https://www.spsnational.org/about/partnerships/nsbp'>NSBP</a> / <a title="National Society of Hispanic Physicists" href='https://www.spsnational.org/about/partnerships/nshp'>NSHP</a></nobr>
            <nobr><a title="American Association of Physicists in Medicine" href='https://www.aapm.org/'>AAPM</a> / <a title="American Association of Physics Teachers" href='https://www.aapt.org/'>AAPT</a></nobr>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/lyco_sps/'>Instagram</a>
            <a href='https://www.facebook.com/LycoSPS/'>Facebook</a>
            <a href='https://lycomingcollege.sharepoint.com/sites/sps'>Sharepoint</a>
            <a href='https://discord.gg/kr5fjpghP5'>Discord Server</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>

          <small class='website-rights'>SPS Lycoming © 2022-{new Date().getFullYear()}</small> {/* TODO: switch to in browser js */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
