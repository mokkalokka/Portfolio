import React, {useEffect, useState} from 'react';
import AppCarousel from "../../components/AppCarousel";
import {Dao } from "../../dao";
const db = new Dao();

export function OtherProjects(props) {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        let snapshot = db.getProjects("other");
        snapshot.then(snapshot => {
            snapshot.forEach(doc => {
                setCarouselItems(carouselItems => carouselItems.concat(doc.data()))
            })
        });
    },[]);



    return (
        <div className={"container mt-3"}>
            {/*<h1 className={"text-center m-0 "}>My other projects</h1>*/}
            <AppCarousel carouselItems={carouselItems}/>

        </div>

    );
}

export default OtherProjects;