import React, {useState} from 'react';
import {firestore} from "../firebase";


export function Projects(props) {
    const [carouselItems, setCarouselItems] = useState([{test:"test"}]);

    return (
        <div><h1>Lets add some projects!</h1>
            <button onClick={addProjects}>Submit</button>

        </div>
    );

    function addProjects() {
        carouselItems.map( item => {
            firestore
                .collection("logos")
                .add(item)
                .then(ref => {
                    console.log('Added document with ID: ', ref.id);
                });
        })

    }
}

export default Projects;