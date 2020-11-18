import React from "react";

export default function ImageComponent(props) {
  return (
    <picture>
      <img src={props.url} alt={""} />
    </picture>
  );
}
