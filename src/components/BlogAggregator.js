import React, { Component } from "react";
import axios from "axios";
import stripHtml from "string-strip-html";

import BlogDisplay from "./BlogDisplay";

class BlogAggregator extends Component {
  state = {
    blogUrls: [
      "https://sleeplady.com/feed/",
      "http://www.sleepreviewmag.com/feed/",
      "https://babysleepsite.com/feed/",
      "http://feeds.feedburner.com/doctorpark",
      "https://drcraigcanapari.com/feed/",
      "https://sleepjunkies.com/feed/",
      "https://thesleepdoctor.com/feed/"
    ],
    blogPosts: []
  };

  async componentDidMount() {
    try {
      const posts = await axios.get(
        "https://sleeptrack.herokuapp.com/api/blogPosts"
      );
      this.setState({ blogPosts: posts.data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="BlogAggregator">
        {this.state.blogPosts.map((post, index) => {
          return (
            <BlogDisplay
              title={post.title}
              author={post.author}
              body={post.body}
              pubDate={post.pubDate}
              thumbnailUrl={post.thumbnailUrl}
              linkUrl={post.linkUrl}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogAggregator;
