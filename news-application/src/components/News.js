import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

    articles = [];
        

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6bd35b34b0d7476ca857f52e5efbf0e3";
        let data = await fetch(url);
        let parsedData  = await data.json();
        this.setState({articles: parsedData.articles})
        console.log(parsedData);
    }

    render() {
        return (
            <div className='container my-3'>
                <h3>DailyNews</h3>
                <div className="row my-3">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4">
                        <NewsItem key={element.url} title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage}/>
                    </div>
                    })}
                    
                </div>
            </div>
        )
    }
}

export default News