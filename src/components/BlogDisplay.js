import React, { Component } from "react";
import { Container, Media, Image } from "react-bootstrap";
import styled from "styled-components";


const StyledImage = styled(Image) `
  margin-top: 40px;
  margin-right: 10px;
`;

const MediaDiv = styled(Media.Body) `
  margin-top: 40px;
`;



class BlogDisplay extends Component {
  addHolder = event =>
    (event.target.src = "https://www.fillmurray.com/128/128");

  render() {
    return (
      <Container>
        <Media>
          <StyledImage
          
            width={100}
            height={100}
            src={this.props.thumbnailUrl}
            alt="blog image"
            herf={this.props.linkUrl}
            onError={this.addHolder}
            thumbnail
            fluid
          />
          <MediaDiv>
          <Media.Body>
            <h5>{this.props.title}</h5>
            <p>{this.props.body}</p>
          </Media.Body>
        </MediaDiv>
        </Media>
      </Container>
    );
  }
}

export default BlogDisplay;
