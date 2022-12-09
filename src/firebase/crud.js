import {collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";


// функция для добавление нового поста в коллекцию
export const addNewPost = async(data) => {
    await addDoc(collection(firestore, 'posts'), data)
};

export const addNewPostRobot = async(data) => {
    await addDoc(collection(firestore, 'robot'), data)
}


// //функция для загрузки постов и возврата в виде промиса
export const getAllPosts = async() =>{
    
    const response = await getDocs(collection(firestore,'posts')) 
    const arr = response.docs.map(e => e.data())
    return arr;
};
