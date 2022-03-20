import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h3>DailyNews</h3>
                <div className="row my-3">
                    <div className="col-md-4">
                        <NewsItem title={"mytitle"} description={"mydesc"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"mytitle"} description={"mydesc"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"mytitle"} description={"mydesc"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default News