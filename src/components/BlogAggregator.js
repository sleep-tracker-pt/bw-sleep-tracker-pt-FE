import React, { Component } from "react";
import axios from "axios";
var parser = require("rss-parser-browser");

class BlogAggregator extends Component {
  getUrl = () => {
    axios.get("https://sleeplady.com/feed").then(response => console.log(response));
    // parser.parseURL("https://www.reddit.com/.rss", function(err, parsed) {
    //   console.log(parsed.feed.title);
    //   parsed.feed.entries.forEach(function(entry) {
    //     console.log(entry.title + ":" + entry.link);
    //   });
    // });
  };

  render() {
    return (
      <div className="BlogAggregator">
        <button onClick={this.getUrl}>test me</button>
      </div>
    );
  }
}

export default BlogAggregator;
