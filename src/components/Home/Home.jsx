import React from "react";
import d from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div className={d.parent}>
                <div className={d.facts}>
                    <h3>Горы Тяньцзи, Китай</h3>
                    <p>Находятся в китайской провинции Хунань. Огромные мраморные шпили взлетают ввысь на сотни метров от подножия.
                    Посетители могут воспользоваться канатной дорогой, если рассмотреть все эти чудеса вблизи.</p>
                    <img src='https://free-eyes.com/wp-content/uploads/2021/02/amazing-scenary-of-prince-tianzi-mountain-china.jpg' alt=''/>
                </div>
                <div className={d.facts}>
                    <h3>Гигантский храмовый комплекс Ангкор, Камбоджа</h3>
                    <p>Самая большая культовая постройка в мире. 
                        Это сложная трехуровневая конструкция с множеством лестниц и переходов, увенчанная 5 башнями. 
                        Храм не зря называют душой кхмерского народа, ведь Ангкор в точности представляет кхмерское искусство, 
                        великую цивилизацию, сердце нации.</p>
                    <img src='https://vandruy.by/wp-content/uploads/2017/07/maxresdefault-min.jpg' alt=''/>
                </div>
                <div className={d.facts}>
                    <h3>Национальный приморский парк Хитачи, Япония</h3>
                    <p>На месте, где когда-то базировались вооруженные войска, теперь расцветают пышным цветом тюльпаны, маки, нарциссы, 
                        незабудки, лилии и сакура. 
                        Особенностью огромного парка, раскинувшегося на площади в 120 гектар, является следование природным 
                        временам года: весна, лето, осень и зима здесь имеют собственные цветочные покровы.</p>
                    <img src='https://i.pinimg.com/originals/a4/72/54/a472549e39762db4dfb2f3467eab7b62.jpg' alt=''/>
                </div>
                <div className={d.facts}>
                    <h3>Пещера Бенагил в Алгарве, Португалия</h3>
                    <p>Пещера Алгарве-де-Бенагил находится в Португалии и является одним из самых красивых мест не только в этой стране, 
                        а и на всей планете. Образовалась эта природная достопримечательность под воздействием воды и ветра, сформировав 
                        естественную полость невероятной красоты. Пещера расположена рядом с популярным пляжем Бенагил, попасть в нее можно 
                        только с моря. </p>
                    <img src='https://www.joinus.pro/wp-content/uploads/2016/07/1455741941_peschera-plyazha-benagil-algarve-1024x682.jpg' alt=''/>
                </div>
            </div>
        </div>    
    )
}

export default Home;