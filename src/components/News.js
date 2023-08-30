import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
        country: 'in',
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ca81a99da1f4ad79900f12f37135c65&pageSize=9`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, 
      totalResults : parsedData.totalResults, 
      loading : false});
  }

  handlePrev = async ()=>{
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page -1}&pageSize=9`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      page : this.state.page-1,
      articles : parsedData.articles,
      loading : false
    })

  }

  handleNext = async ()=>{
    console.log("next");
      if(!(this.state.page + 1>Math.ceil(this.state.totalResults/9))){
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page + 1}&pageSize=9`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);

      this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles,
      loading : false
      })
      }
      
    
    
  }

  render() {
    return (
      <>
      <div className='container my-3 p-2' >
        <h1 className='text-center'>NewsTales - {this.props.heading}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((e)=>{
            return (<div key={e.url} className="col-sm-4">
                <NewsItem title={e.title?e.title:""} description = {e.description?(e.description.slice(0,80)):" "} imageUrl={e.urlToImage} newsUrl={e.url} dateTime={e.publishedAt.slice(0,10)} source={e.source.name}/>
            </div>)
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
      
      </>
    )
  }
}

export default News
