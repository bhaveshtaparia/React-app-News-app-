// 718b01c83cd1475294146d7a9ab902e0
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
  
  
  constructor(){
    super();
    
    console.log("Sjbfadsbfadjf dm")
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("sbfs")
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=718b01c83cd1475294146d7a9ab902e0&page=${this.state.page}&pageSize=20`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,loading:false})
  }
   privious=async()=>{
    console.log("sbfs")
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=718b01c83cd1475294146d7a9ab902e0&page=${this.state.page-1}&pageSize=20`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({loading:false,articles:parsedData.articles,
      page:this.state.page-1
    })
     }
     next=async ()=>{
      if(this.state.page+1>Math.ceil(this.state.totalArticles)/20){

      }
      else{

        console.log("sbfs")

        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=718b01c83cd1475294146d7a9ab902e0&page=${this.state.page+1}&pageSize=20`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({loading:false,articles:parsedData.articles,
          page:this.state.page+1
        })
      }
    }
  render() {
    return (
      <div className='container'>
        <h1>Important headlines</h1>
        <div className='position-absolute top-50 start-50 translate-middle '>
        {this.state.loading && <Spinner/>}
        </div>
        <div className='container row'>
        {!this.state.loading&&this.state.articles.map((element)=>{

         return <div className='col-md-4  my-3'key={element.url}>
        <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}/>
        </div>

        })}
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} onClick={this.privious} type="button" className="btn btn-primary">Privious</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles)/20} onClick={this.next} type="button" className="btn btn-primary">Next</button>
      </div>
         
        </div>
        </div>
    )
  }
}

export default News