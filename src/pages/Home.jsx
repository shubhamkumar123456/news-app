import React, { useEffect, useRef, useState } from 'react'
import Headlines from '../components/Headlines';
import { Link } from 'react-router-dom';

const Home = (props) => {

    console.log(props.ans)
    const [newsArray, setnewsArray] = useState([]);
const [search, setsearch] = useState("world");
    let newsRef = useRef()


    let fetchNews = async () => {
        let res = await fetch(`https://newsapi.org/v2/everything?q=${props.ans?props.ans:search}&apiKey=e9a02ed81a464e3186defd7f26edd52d`)

        let data = await res.json()
        // console.log(data.articles)
        setnewsArray(data.articles)


    }

    // fetchNews()
    useEffect(() => {
        fetchNews()
    }, [search,props.ans])
    // console.log(newsArray)


const handleNewsSearch =(e)=>{
    e.preventDefault()
    let searchValue = newsRef.current.value
    console.log(searchValue)
    setsearch(searchValue)      
}

    return (

<div>
    
<div>
        <form className="d-flex col-md-6 m-auto my-3" role="search">
            <input ref={newsRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={handleNewsSearch} className="btn btn-outline-success" type="submit">Search</button>
        </form>

    </div>
        <div className='container-fluid d-flex bg-dark justify-content-center mt-3 pe-4'>
           
            <div className="row row-cols-3 col-md-9 bg-success d-flex justify-content-center me-3">
                {newsArray?.map((ele) => {
                    return <div className="card" style={{ width: '15rem' }}>
                        <img style={{ height: "250px" }} src={ele.urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{ele.title}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <Link to={ele.url} className="btn btn-primary">View full news</Link>
                        </div>
                    </div>

                })}
            </div>

            <div className='bg-primary topHeadlines'>
                <h3 className='text-center'> Top Headlines</h3>
                <Headlines />
            </div>
        </div>
</div>
    )
}

export default Home
