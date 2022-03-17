

import Average from './Average';
import { React, useState } from "react";


export default function Card({ person }) {
    const [isActive, setIsActive] = useState(false);
    console.log(person.grades);
    return (
        <div className="App">
            <div className='box'>
                <div className='imageBox'>
                    <img className='image' src={person.pic} alt='picture'></img>
                </div>
                <div className='boxInformation'>
                    <div>
                        <h3> {person.firstName} {person.lastName}</h3>
                    </div>
                    <div className='information'>
                        <p>Email: {person.email}</p>
                        <p>Company: {person.company}</p>
                        <p>Skill: {person.skill}</p>
                        <Average average={person.grades} />
                    </div>


                </div>
                <div className='plus' onClick={() => setIsActive(!isActive)}>
                    <div >
                        {isActive ? ' - ' : '+'}
                    </div>
                </div>

            </div>
            <div className='grades'>
                <ul >
                    {isActive && person.grades.map((num, index) => (

                        <li key={index}>{`Test ${index + 1} : ${num}`}</li>

                    ))}
                </ul>
            </div>

        </div>
    );
}

