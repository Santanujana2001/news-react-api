import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  const updatenews=async()=>{
    props.setprogress(30);
    const urll=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
    setloading(true);
    let data = await fetch(urll)
    props.setprogress(50);
    let parsed=await data.json()
    props.setprogress(80);
    setarticles(parsed.articles)
    setloading(false)
    settotalResults(parsed.totalResults)
    props.setprogress(100);
  }

  useEffect(() => {
    document.title=`NewsDaily - ${capitalizeFirstLetter(props.category)}`
    updatenews();},[])
  // useEffect() is the substitute of componentDidMount()
  const fetchMoreData = async() => {
    // await
    const urll=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`
    setpage(page+1)
    let data = await fetch(urll)
    let parsed=await data.json()
    setarticles(articles.concat(parsed.articles))
    settotalResults(parsed.totalResults)
  };
    return (
      <>
        <h1 className="text-center text-decoration-underline" style={{margin:"35px 0px",marginTop:"90px"}}>Top Headlines of {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element,i)=>{
          return <div className="col-md-4" key={i} >
                     <Newsitem title={element.title?element.title.slice(0,60):""} desc={element.description?element.description.slice(0,60):""} imurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/></div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  
}
News.defaultProps = {
  country:"in",
  pagesize:9,
  category:"general"
}
News.propTypes = {
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}
export default News;