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
            pos='President / Z3 AZC'
          />
        <ExecItem
            imgsrc={vicepresident}
            name='Sarah Loucks'
            pos='Vice President'
          />
        <ExecItem
            imgsrc={webmaster}
            name='Thane Goetz'
            pos='Webmaster'
          />
        <ExecItem
            imgsrc={advisor}
            name='Mrs. Melissa Kiehl'
            pos='Faculty Advisor'
          /> 
        
        <br/>
        
        <ExecItem
            imgsrc={secretary}
            name='Adrianna Campisi'
            pos='Secretary'
          />
        <ExecItem
            imgsrc={treasurer}
            name='Matthew Motuz'
            pos='Treasurer'
          /> 
          <ExecItem
            imgsrc={publicrelations}
            name='Izzy Jackson'
            pos='Public Relations'
          />
          <ExecItem
            imgsrc={eventcoordinator}
            name='Colt Walker'
            pos='Event Coordinator'
          />
          

      </div>
    </div>
  );
}

export default ExecBoard;
