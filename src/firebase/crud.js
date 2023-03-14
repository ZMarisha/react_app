import {collection, getDocs, addDoc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";



// функция для добавление нового сообщения в коллекцию
export const addNewPost = async(data) => {
    await addDoc(collection(firestore, 'posts'), data)
};

export const addMyNewFriend = async(user) => {
    await addDoc(collection(firestore, 'friends'), user)
};

export const addNewPostRobot = async(data) => {
    await addDoc(collection(firestore, 'robot'), data)
};

// функция для добавление нового поста пользователя в коллекцию
export const addMyPost = async(post) => {
    await addDoc(collection(firestore, 'myPosts'), post)
};

// функция для добавление idDoc пользователя в коллекцию
const addIdDocUser = async(idUser, idDocUser) => {
    await addDoc(collection(firestore, 'idDOC'), {
        id: idUser,
        idDoc: idDocUser,
    })
};

//функция для добавления данных нового пользователя в базу
export const addAboutMe = async(displayName, id) => {
    const docRef = await addDoc(collection(firestore, 'user'), {
       id: id,
       name: displayName,
       birthDay: '',
       city: '',
       education: '',
       website: '',
   })
   addIdDocUser(id, docRef.id);
};


//функция для загрузки сообщений и возврата в виде промиса
export const getAllPosts = async() =>{
    const response = await getDocs(collection(firestore,'posts')); 
    const arr = response.docs.map(e => e.data());
    return arr;
};

//функция для загрузки постов пользователя
export const getAllMyPosts = async() =>{
    const response = await getDocs(collection(firestore,'myPosts'));
    const arr = response.docs.map(e => e.data());
    return arr;
};

//функция для загрузки idDoc пользователей
export const getIdDocs = async() =>{
    const response = await getDocs(collection(firestore,'idDOC'));
    const arr = response.docs.map(e => e.data());
    return arr;
};

//функция для загрузки всех пользователей
export const getAllAboutMe = async() =>{
    const response = await getDocs(collection(firestore,'user'));
    const arr = response.docs.map(e => e.data());
    return arr;
};

//функция для обновления данных пользователя
export const chahgedDataUser = async(id, data) => {
    const changeData = doc(firestore, 'user', id);
    await updateDoc(changeData, data);
};

//функция для создания аватарки пользователя
export const addUserAvatar = async(id) => {
    await setDoc(doc(firestore, 'avatars', id), {
        id: id,
        avatar: ''
    })
};

//функция для добавления/изменения аватарки пользователя
const chahgedUserAvatar = async(id, img) => {
    const changeData = doc(firestore, 'avatars', id);
    await updateDoc(changeData, img);
};

//функция для добавления аватарки пользователя
export const addAvatars = (file, id) => {
    const storage = getStorage();
    const metadata = {
        contentType: 'image/jpeg'
    };
    const storageRef = ref(storage, 'images/' + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    console.log(uploadTask)
    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
            console.log('Upload is paused');
            break;
            case 'running':
            console.log('Upload is running');
            break;
            default: break;
        }
    },
    (error) => {
        switch (error.code) {
            case 'storage/unauthorized':    
                break;
            case 'storage/canceled':
                break;
            case 'storage/unknown':
                break;
            default: break;
        }
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            chahgedUserAvatar(id, {
                avatar: downloadURL
            })
        })
    })
    
};

//функция для загрузки сообщений и возврата в виде промиса
export const getUserAvatar = async() =>{
    const response = await getDocs(collection(firestore,'avatars')); 
    const arr = response.docs.map(e => e.data());
    return arr;
};



