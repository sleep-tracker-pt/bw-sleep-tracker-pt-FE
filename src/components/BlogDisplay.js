import React, { Component } from "react";
import { Container, Media, Image } from "react-bootstrap";
import styled from "styled-components";

const StyledImage = styled(Image)`
  margin-top: 40px;
  margin-right: 10px;
`;

const MediaDiv = styled(Media.Body)`
  margin-top: 40px;
`;

const StyledH5 = styled.h5`
  color: white;
  text-decoration: none;
`;

const StyledA = styled.a`
  color: white;
  text-decoration: none;
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
            onError={this.addHolder}
            thumbnail
            fluid
          />
          <MediaDiv>
            <Media.Body>
              <StyledH5>
                <StyledA href={this.props.linkUrl}>{this.props.title}</StyledA>
              </StyledH5>
              <p>{this.props.body}...</p>
            </Media.Body>
          </MediaDiv>
        </Media>
      </Container>
    );
  }
}

export default BlogDisplay;
