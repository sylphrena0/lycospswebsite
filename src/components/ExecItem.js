import React from 'react';

function ExecItem(props) {
  return (
    <>
        <div class="card-user-container">
          <div class="card-user-avatar">
            <img src={props.imgsrc} alt={props.name} class="user-image" width="200"/>
          </div>
          <div class="card-user-bio">
            <h4 class="officer">{props.name}</h4>
            <p class="role">{props.pos}</p>
          </div>
        </div>
    </>
  );
}

export default ExecItem;
