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

  componentDidMount() {
    this.state.blogUrls.forEach(url =>
      axios
        .get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
        .then(response => {
          let strippedBody = stripHtml(response.data.items[0].content);
          let newPost = {
            title: response.data.items[0].title,
            author: response.data.items[0].author,
            body: strippedBody.substring(0, 150),
            pubDate: response.data.items[0].pubDate,
            thumbnailUrl: response.data.items[0].thumbnail,
            linkUrl: response.data.items[0].link
          };
          this.setState({ blogPosts: [...this.state.blogPosts, newPost] });
        })
        .catch(error => console.log(error))
    );
  }

  render() {
    return (
      <div className="BlogAggregator">
        {this.state.blogPosts.map(post, index => {
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
