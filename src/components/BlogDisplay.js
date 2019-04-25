import React from "react";
import { Media, Image } from "react-bootstrap";

const BlogDisplay = props => {
  return (
    <Media>
      <Image
        width={128}
        height={128}
        src={props.thumbnailUrl}
        alt="blog image"
        thumbnail
        fluid
      />
      {/* <img width={128} height={128} src={props.thumbnailUrl} alt="blog image" /> */}
      <Media.Body>
        <h5>{props.title}</h5>
        <p>{props.body}</p>
      </Media.Body>
    </Media>
  );
};

export default BlogDisplay;
