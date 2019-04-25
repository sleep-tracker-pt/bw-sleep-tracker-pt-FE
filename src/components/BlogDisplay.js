import React, { Component } from "react";
import { Media, Image } from "react-bootstrap";


class BlogDisplay extends Component {
  addHolder = event => (event.target.src = "https://www.fillmurray.com/128/128");

  render() {
    return (
      <Media>
        <Image
          width={128}
          height={128}
          src={this.props.thumbnailUrl}
          alt="blog image"
          onError={this.addHolder}
          thumbnail
          fluid
        />
        <Media.Body>
          <h5>{this.props.title}</h5>
          <p>{this.props.body}</p>
        </Media.Body>
      </Media>
    );
  }
}

export default BlogDisplay;
