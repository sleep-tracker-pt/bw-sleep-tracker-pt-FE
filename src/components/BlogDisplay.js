import React from "react";
import { Media } from "reactstrap";

const BlogDisplay = props => {
  return (
    <Media>
      <Media left href={props.linkUrl}>
        <img
          width={128}
          height={128}
          src={props.thumbnailUrl}
          alt="blog image"
        />
      </Media>
      <Media body>
        <Media heading>{props.title}</Media>
        {props.body}...
      </Media>
    </Media>
  );
};

export default BlogDisplay;
