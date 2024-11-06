import React from 'react';

function ExecItem(props) {
  return (
    <div className="card-user-container">
      <div className="card-user-avatar">
        <img src={props.imgsrc} alt={props.name} className="user-image" width="200" />
      </div>
      <div className="card-user-bio">
        <h4 className="officer">{props.name}</h4>
        <p className="role">{props.pos}</p>
      </div>
    </div>
  );
}

export default ExecItem;
