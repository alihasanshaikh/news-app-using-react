import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://i.ytimg.com/vi/2Spi0kVTFR0/maxresdefault.jpg":imageUrl} className="card-img-top" alt="image not available or video"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="norefrrer" href={newsUrl} trarget="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    </div>
        )
    }
}

export default NewsItem
