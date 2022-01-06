import React, {useState} from 'react';
import '../stylesheets/App.css';


import SkillsCard from "../components/SkillsCard";
import Test from "../components/Test";
import ChainAnimation from "../components/SpringTest/ChainAnimation";
import TransitionText from "../components/TransitionText"
import {Container} from "react-bootstrap";
import firebase from "../firebase";

export function Landing() {

    return (
        <div>
            <Container className={"full-height"} fluid={"md"}>
                <TransitionText/>
            </Container>


            {/*<div className={"container card bg-opaque"}>*/}
                {/*<SkillsCard/>*/}

            {/*</div>*/}
        </div>
    );
}


/*<button onClick={testDb} >Test database</button>*/
/*function testDb() {
    alert("testDb running");
    firebase.firestore().collection("users").add({
        firstName: "Michael",
        lastName: "Larsen"
    }).then(r => alert("done!"))
}*/

export default Landing;