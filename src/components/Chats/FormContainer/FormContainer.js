import React, { useEffect, useRef } from "react";
import Form from "./Form/Form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addDate, addTime} from '../../../otherFunctions/otherFunctions';
import { addRobotThunk } from "../../../redux/chatsReducer";
import { addNewPost, getAllPosts } from "../../../firebase/crud";

const FormContainer = () => {

const ROBOT = 'Hi! I am Robot. I got your message!';

  const { chatId } = useParams();
  const messageList = useSelector(state => state.chats.messageList);
  const testChats = useSelector(state => state.chats)
  
  let inputText = useSelector(state => state.chats.value)
  const dispatch = useDispatch();
  const textareaRef = useRef('');
    
  let changeText = (e) => {
    dispatch({type: 'ADD_TEXT', inputText: e.target.value})
  }
    
  let postDate = addDate();
  let postTime = addTime();
  
  //TODO Добавил Андрей. Суть логики в том, что загрузку всех сообщений я вынес в отдельный экшен.
  //FETCH_MESSAGE экшн который добавляет все сообщения в стейт
  //Сейчас сообщений отображаются корректно без дубликации.
  // Небольшое поянение. За добавление одного сообщения и за загрузку всех сообщений для конкретного пользователя
  //Должны отвечать разные экшены. Иначе возникает путаница. 
  // Структурно получается так
  // 1 Приложение запускается, рендерится список пользователей. Загружаем данные с файрбейс
  // 2 Запушили все сообщения полученные из firebase в стейт. Теперь стейт messageList выглядит как массив всех
  // сообщений из базы
  useEffect(()=>{
    let posts = getAllPosts().then(data => {
      dispatch({type:"FETCH_MESSAGES", payload:data})
    })
  },[])

  const getPostHandler = async() => {
    let data = await getAllPosts();
    // TODO Мой вариант. Суть такая мы просто берем и загружаем сообщения из базы и сразу пушим в стейт весь массив
    // НЕ нужно делать никаких дополнительных фильтраций и т д. Просто берете весь массив из базы и запихиваете его в стейт
    // Как работает добавление в моем варианте.
    // Выполняется ваш crud add to firebase, далее наш массив сообщений на стороне базы данных обновился и получил новое сообщение
    // После этого грузим снова все сообщения и мерджим наш messageList уже с новым сообщением.
    dispatch({type:"FETCH_MESSAGES", payload:data})
    //Закомментировал. Тут не оч хорошо не должно быть map. Должно происходить добавление всего одного сообщения
    // data.map(el => dispatch({type: 'ADD_MESSAGE', message: {id: el.id, text: el.text, author: el.author, time: el.time, date: el.date}}))
  }

  let addPost = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      let data = {
        id: chatId, text: inputText, author: '', time: postTime, date: postDate
      };
      //dispatch({type: 'ADD_MESSAGE', message: {id: chatId, text: inputText, author: '', time: postTime, date: postDate}});
      addNewPost(data);
      getPostHandler();
    }
  };


  useEffect(() => {
    dispatch(addRobotThunk(messageList, chatId, postDate, postTime, ROBOT));
  }, [dispatch, messageList, chatId, postDate, postTime, ROBOT]);


  return (
    <Form addPost={addPost} changeText={changeText} textareaRef={textareaRef} messageList={messageList} inputText={inputText}/>
  )
}

export default FormContainer;