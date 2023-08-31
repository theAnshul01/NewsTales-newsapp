import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

  static defaultProps = {
        country: 'in',
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
      }

  

  

  constructor(props){
    super(props);
    // console.log("hello I am constructor from news component");
    this.state = {
      articles : [],
      loading: true,
      page : 1, 
      totalResults : 0,
    }
  }

  async updateNews(){
     this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page}&pageSize=9`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles : parsedData.articles, 
      totalResults : parsedData.totalResults,
    loading : false });
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
   
  }

  // handlePrev = async ()=>{
  //   this.setState({page : this.state.page - 1})
  //   this.updateNews();
  // }

  // handleNext = async ()=>{
  //   this.setState({page : this.state.page + 1});
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({page : this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ca81a99da1f4ad79900f12f37135c65&page=${this.state.page}&pageSize=9`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : this.state.articles.concat(parsedData.articles), 
      totalResults : parsedData.totalResults, 
      loading : false});
  };

  render() {
    return (
      <>
      <div className='container my-3 p-2' >
        <h1 className='text-center'>NewsTales - {this.props.heading}</h1>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll style={{overflow : "hidden"}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row my-4">
            {this.state.articles.map((e)=>{
              return (<div key={e.url} className="col-sm-4">
                  <NewsItem title={e.title?e.title:""} description = {e.description?e.description.slice(0,50):"..."} imageUrl={e.urlToImage} newsUrl={e.url} dateTime={e.publishedAt ? e.publishedAt.slice(0,10): ""} source={e.source.name ? e.source.name : "by unknown"}/>
              </div>)
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </div>
      
      </>
    )
  }
}

export default News
