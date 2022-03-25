import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        
        let {title, description, imageUrl, url} = this.props;
        let newImageAddress = "http://www.kashilive.com/images/news-162633027160efd49f20a13.jpg";
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl===null?newImageAddress:imageUrl} className="card-img-top" alt="..." height={"200px"} width={"100px"}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem