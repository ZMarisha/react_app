import d from './MyPhotos.module.css';
import { ImageList, ImageListItem } from '@mui/material';


const itemData = [
    'https://setphone.ru/wp-content/uploads/2021/06/Kak-skachat-muzyku-na-telefon-s-Android-1-e1623930326444.jpg', 
    'http://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg',
    'http://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_35_23075505-500x313.jpg',
    'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVmNy7orGgaVVyQwVkL_RcaPkM9cKdMQG8UOR5SGYeAM5CERTvzWQbelz8lU84BXaxnY&usqp=CAU',
    'https://klike.net/uploads/posts/2020-01/1578300095_12.jpg',
    'https://klike.net/uploads/posts/2020-01/1578300101_1.jpg',
    'https://klike.net/uploads/posts/2020-01/1578300123_2.jpg',
    'https://klike.net/uploads/posts/2020-01/1578300111_4.jpg'
];

const MyPhotos = () => {
  
    
    return (
        <>
            <h2 className={d.photos}>My photos</h2>
             <ImageList sx={{ height: 250 }} cols={4} rowHeight={164}>
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt=''
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default MyPhotos;