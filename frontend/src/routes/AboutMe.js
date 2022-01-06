import React, {useState} from 'react';
import Image from "../assets/profile_img.JPG";
import {CustomCard} from "../components/CustomCard";

export function AboutMe(props) {
    const [cardContent, setcardContent] = useState({
        image: Image,
        text: "I am a Software Engineering student at " +
            "NTNU Trondeim in Norway.\n\nI Am currently working as a freelance " +
            "web developer and I am available for new projects!",
        author: "Michael S. Larsen",
        links: ["github", "linkdin"]
    });

    return (
        <div className={"landing"}>
            <CustomCard cardContent={cardContent}/>
        </div>
    );
}

export default AboutMe;