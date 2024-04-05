import React, { useEffect, useState } from 'react'

const Headlines = () => {
    const [news, setnews] = useState([]);
    let fetchHeadlines = async()=>{
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=e9a02ed81a464e3186defd7f26edd52d')

        let data = await res.json()
        console.log(data.articles)
        setnews(data.articles)

    }

    useEffect(()=>{
fetchHeadlines()
    },[])
  return (
    <div className=''>
      {news.map((ele)=>{
        return <div className="card mb-2" style={{ width: '15rem' }}>
        <img src={ele.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-truncate">{ele.title}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <a href="#" className="btn btn-primary">View full news</a>
        </div>
    </div>
      })}
    </div>
  )
}

export default Headlines
