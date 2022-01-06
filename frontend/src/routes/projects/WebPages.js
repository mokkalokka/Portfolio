import React, {useEffect, useState} from 'react';
import AppCarousel from "../../components/AppCarousel"
import {Dao } from "../../dao";
import firebase from "../../firebase";
const db = new Dao();

/*const dao = require('../../dao.js');
let db = new dao();*/

export function WebPages(props) {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        let snapshot = db.getProjects("web");
        snapshot.then(snapshot => {
            snapshot.forEach(doc => {
                setCarouselItems(carouselItems => carouselItems.concat(doc.data()))
            })
        });
    },[]);


    return (
        <div className={"container mt-3"}>
            {/*<h1 className={"text-center m-0 text-shadow"}>My Web pages</h1>*/}
            <AppCarousel carouselItems={carouselItems}/>

        </div>

    );
}

export default WebPages;
