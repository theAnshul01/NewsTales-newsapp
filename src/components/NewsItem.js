import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title , description, imageUrl, newsUrl} = this.props;
    const defaultImageUrl = '/newsImage.jpg';

    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl?imageUrl:defaultImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text " style={{margin : 0}}><small className='text-muted'>{this.props.dateTime}</small></p>
                <p className="card-text"><small className='text-muted'>{this.props.source}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
