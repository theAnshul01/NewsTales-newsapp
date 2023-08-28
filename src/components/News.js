import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  handlePrev = async ()=>{
    // console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page -1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page : this.state.page-1,
      articles : parsedData.articles
    })

  }

  handleNext = async ()=>{
    // console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/9)){
        // nothing to do
        alert("That's all for now. Thank you!");
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles
      })
    }
    
  }

  constructor(){
    super();
    // console.log("hello I am constructor from news component");
    this.state = {
      articles : [],
      loading: false,
      page : 1, 
    }
  }

  async componentDidMount(){
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca81a99da1f4ad79900f12f37135c65&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults});
  }
  render() {
    return (
      <>
      <div className='container my-3 p-2' >
        <h1>NewsTales - Top Headlines</h1>
        <div className="row my-4">
          {this.state.articles.map((e)=>{
            return (<div key={e.url} className="col-sm-4">
                <NewsItem title={e.title?(e.title.length>45 ? e.title.slice(0,45): e.title):""} description = {e.description?(e.description.slice(0,80)):"In a significant medical breakthrough, a team of researchers has uncovered a potential treatment for the notorious common cold virus. The virus, responsible for countless sick days each year, has long eluded effective treatment options. However, the newly discovered compound, named \"RhinovirEx,\" has shown remarkable efficacy in early-stage clinical trials.".slice(0,45)} imageUrl={e.urlToImage?e.urlToImage:"https://timesofindia.indiatimes.com/photo/msid-103054109,imgsize-94406.cms"} newsUrl={e.url}/>
            </div>)
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
          <button type="button" class="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
      
      </>
    )
  }
}

export default News
