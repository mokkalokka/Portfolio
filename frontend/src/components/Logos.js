import React, {useState} from 'react';
import {langsJSON} from "./LangsJSON";


export function Logos(props) {
    const [logos, setLogos] = useState(langsJSON);

    return (
        <div>
            {logos.filter(lang => lang.name === props.name)
                .map(lang => {
                    return(
                        <a href={lang.url}>
                            <img className={"m-2"} height={props.height} src={lang.logo} alt={lang.name + " logo"}/>
                        </a>
                    )
                })}
        </div>
    );

}

export default Logos;