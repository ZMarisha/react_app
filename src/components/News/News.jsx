import React, { useEffect } from "react";
import d from './News.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsThunk } from '../../redux/newsReducer'
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";

const News = () => {

    const news = useSelector(state => state.newsPage.newsWorld);
    const dispatch = useDispatch();
    const isPreloader = useSelector(state => state.newsPage.preloader);
    const isError = useSelector(state => state.newsPage.error)
    console.log(isError)

    useEffect(() => {
        dispatch(getNewsThunk())
    }, [dispatch])

    return (
        <div className={d.parent}>
            <div className={d.error}>{ isError ? <Error /> : null}</div>
            <div>{isPreloader ? <Preloader /> : null}</div>
            <>
            <h1>Current News</h1>
            {<ul className={d.list}>
                {news.map((el, i) => (
                <Link key={i} to={`/news/${el.id}`}><li>{el.title}</li></Link>))}
            </ul>}</>  
        </div>
    )
}

export default News;