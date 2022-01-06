import React, {useEffect, useState} from 'react';
import './stylesheets/App.css';
import {Route} from "react-router"
import {Landing} from "./routes/Landing";
import {Contact} from "./routes/Contact";
import Projects from "./routes/Projects";
import AboutMe from "./routes/AboutMe";
import Coding from "./routes/projects/Coding";
import OtherProjects from "./routes/projects/OtherProjects";
import WebPages from "./routes/projects/WebPages";
import {Skills} from "./routes/Skills";
import {Test} from "./components/Test";
import Dashboard from "./routes/Dashboard";
import {auth} from "./firebase";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        console.log(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        return auth.onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
    }, []);

    return (
        <div className={"bg-image"}>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about-me" component={AboutMe}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/test" component={Test}/>

            <PrivateRoute initializing={initializing} authed={!!user} exact path='/dashboard' component={Dashboard}/>

            {/*Projects*/}
            <Route exact path="/projects/coding" component={Coding}/>
            <Route exact path="/projects/other-projects" component={OtherProjects}/>
            <Route exact path="/projects/web-pages" component={WebPages}/>
        </div>

    );
}

export default App;