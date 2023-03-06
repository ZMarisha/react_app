import {collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";


// функция для добавление нового поста в коллекцию
export const addNewPost = async(data) => {
    await addDoc(collection(firestore, 'posts'), data)
};

export const addMyNewFriend = async(user) => {
    await addDoc(collection(firestore, 'friends'), user)
};

export const addNewPostRobot = async(data) => {
    await addDoc(collection(firestore, 'robot'), data)
};

export const addMyPost = async(post) => {
    await addDoc(collection(firestore, 'myPosts'), post)
};


// //функция для загрузки постов и возврата в виде промиса
export const getAllPosts = async() =>{
    
    const response = await getDocs(collection(firestore,'posts')) 
    const arr = response.docs.map(e => e.data())
    return arr;
};

export const getAllMyPosts = async() =>{
    
    const response = await getDocs(collection(firestore,'myPosts')) 
    const arr = response.docs.map(e => e.data())
    return arr;
};
