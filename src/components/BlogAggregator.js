import React, { Component } from "react";
import axios from "axios";
import stripHtml from "string-strip-html";

class BlogAggregator extends Component {
  state = {
    blogUrls: [
      "https://sleeplady.com/feed/",
      "http://www.sleepreviewmag.com/feed/",
      "https://babysleepsite.com/feed/",
      "http://feeds.feedburner.com/doctorpark",
      "https://drcraigcanapari.com/feed/",
      "https://sleepjunkies.com/feed/",
      "https://thesleepdoctor.com/feed/",
      "http://feeds.feedburner.com/nsfalert"
    ],
    blogPosts: [
      {
        title: "",
        author: "",
        body: "",
        pubDate: "",
        thumbnailUrl: ""
      }
    ]
  };

  getRss = () => {
    this.state.blogUrls.forEach(url =>
      axios
        .get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
        .then(response => this.setState({ ...this.state }))
    );
  };

  render() {
    return (
      <div className="BlogAggregator">
        <button onClick={this.geRss}>test me</button>
      </div>
    );
  }
}

export default BlogAggregator;
