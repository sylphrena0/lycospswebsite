import { Link } from 'gatsby';
import React from 'react';
import Subscribe from '../components/Subscribe';
import './Footer.css';

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
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Our Chapter</h2>
            <Link to='/history'>History</Link>
            <Link to='/sigmapisigma'>Our Alumni</Link>
            <Link to='/photos'>Photos</Link>
            <Link to='/contact'>Contact Us</Link>
          </div>
          <div className='footer-link-items'>
            <h2>SPS National</h2>
            <a href='https://www.spsnational.org/'>National Website</a>
            <a href='https://discordapp.com/invite/WcGrAcx'>National Discord</a>
            <a href='https://www.spsnational.org/about/membership/benefits-sps-national-membership'>Membership</a>
            <a href='https://www.spsnational.org/awards/scholarships'>Scholarships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Related Links</h2>
            <span>
              <a title="The American Institute of Physics" href='https://www.aip.org/'>AIP</a> / <a title="American Physical Society" href='https://www.aps.org/'>APS</a>
            </span>
            <span>
              <a title="American Association for the Advancement of Science" href='https://www.aaas.org/'>AAAS</a> / <a title="American Astronomical Society" href='https://aas.org/'>AAS</a>
            </span>
            <span>
              <a title="National Society of Black Physicists" href='https://www.spsnational.org/about/partnerships/nsbp'>NSBP</a> / <a title="National Society of Hispanic Physicists" href='https://www.spsnational.org/about/partnerships/nshp'>NSHP</a>
            </span>
            <span>
              <a title="American Association of Physicists in Medicine" href='https://www.aapm.org/'>AAPM</a> / <a title="American Association of Physics Teachers" href='https://www.aapt.org/'>AAPT</a>
            </span>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/lyco_sps/'>Instagram</a>
            <a href='https://www.facebook.com/LycoSPS/'>Facebook</a>
            <a href='https://lycomingcollege.sharepoint.com/sites/sps'>Sharepoint</a>
            <a href='https://discord.gg/kr5fjpghP5'>Discord Server</a>
          </div>
        </div>
      </div>
      <section className='website-rights'>
        <div className='website-rights-wrap'>
          <small><a href="https://github.com/sylphrena0/lycospswebsite" target="_blank" rel="noopener noreferrer">SPS Lycoming © 2022-{new Date().getFullYear()}</a></small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
