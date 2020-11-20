import React from 'react';

export default function ImageComponent(props) {
  return (
    <picture>
      <img className="standard-image" src={props.url} alt={'Image of rooms'} />
    </picture>
  );
}
