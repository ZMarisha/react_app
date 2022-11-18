import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import d from './Article.module.css';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleThunk } from '../../../redux/newsReducer';
import Error from "../../Error/Error";
import Preloader from "../../Preloader/Preloader";

const Article = () => {
   
    const article = useSelector(state => state.newsPage.article);
    const dispatch = useDispatch();
    let {newsId} = useParams();
    let navigate = useNavigate();
    const isPreloader = useSelector(state => state.newsPage.preloader);
    const isError = useSelector(state => state.newsPage.error)

    console.log(newsId)
    
    useEffect(() => {
        dispatch(getArticleThunk(newsId))
    },[newsId, dispatch]);

    console.log(article)
    
    return (
        <div className={d.article}>
            <div>{isPreloader ? <Preloader /> : null}</div>
            <div className={d.error}>{ isError ? <Error /> : <><Button className={d.btn} onClick={() => {
                navigate(-1)
             }} variant='contained' size='large' sx={{ fontWeight: '600', width: '120px', marginTop: '20px' }} type='submit'>GO BACK</Button>
            {article && (
                <>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </>
            )}</>}</div>
        </div>
    )
}

export default Article;