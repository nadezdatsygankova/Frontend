
import Average from './Average';
import Collapsible from './Collapsible';

export default function Card({ person }) {


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
                    <div>
                        {/* <Collapsible />; */}
                    </div>

                </div>

            </div>

        </div>
    );
}

