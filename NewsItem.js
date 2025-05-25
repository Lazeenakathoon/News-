import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/b6bb/live/b30db170-2763-11f0-8c66-ebf25fc2cfef.jpg":imageUrl} className="card-img-top" alt="News Thumbnail" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferren" href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
