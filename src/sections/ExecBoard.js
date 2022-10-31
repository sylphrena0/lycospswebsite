import React from 'react';
import '../App.css';
import './ExecBoard.css';
import ExecItem from '../components/ExecItem';
import eventcoordinator from '../images/execboard/eventcoordinator.webp';
import president from '../images/execboard/president.webp';
import publicrelations from '../images/execboard/publicrelations.webp';
import secretary from '../images/execboard/secretary.webp';
import treasurer from '../images/execboard/treasurer.webp';
import vicepresident from '../images/execboard/vicepresident.webp';
import webmaster from '../images/execboard/webmaster.webp';
import advisor from '../images/execboard/advisor.webp';


function ExecBoard() {
  return (
    
    <div class="exec-board">  
      <div className='exec-board-container'>
        <ExecItem
            imgsrc={president}
            name='Kaitlyn Sheriff'
            pos='President'
          />
        <ExecItem
            imgsrc={vicepresident}
            name='Amber Elinsky'
            pos='Vice President'
          />
        <ExecItem
            imgsrc={treasurer}
            name='Priktish Suntoo'
            pos='Treasurer'
          /> 
        <ExecItem
            imgsrc={advisor}
            name='Mrs. Melissa Kiehl'
            pos='Faculty Advisor'
          /> 
        
        <br/>
        
        <ExecItem
            imgsrc={secretary}
            name='Holland McVey'
            pos='Secretary'
          />
        <ExecItem
            imgsrc={publicrelations}
            name='Soojay Jhugaroo'
            pos='Public Relations'
          />
        <ExecItem
            imgsrc={eventcoordinator}
            name='Zoie Dodson'
            pos='Event Coordinator'
          />
        <ExecItem
            imgsrc={webmaster}
            name='Sylphrena Kleinsasser'
            pos='Webmaster / Z3 AZC'
          />

      </div>
    </div>
  );
}

export default ExecBoard;
