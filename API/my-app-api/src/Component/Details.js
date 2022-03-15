

import Posts from "./Posts";

export default function Details(props) {
    console.log(props)
    let data = props;
    return (
        <div className="App">
            <div>
                <input value='Search by name'></input>
            </div>
            {data &&
                data.map(({ id, lastName, firstName, email, company, skill, grades, pic }) => (
                    <div key={id} className='box'>
                        <div className='imageBox'>
                            <img className='image' src={pic} alt='picture'></img>
                        </div>
                        <div className='boxInformation'>
                            <div>
                                <h3> {firstName} {lastName}</h3>
                            </div>
                            <div className='information'>
                                <p>Email: {email}</p>
                                <p>Company: {company}</p>
                                <p>Skill: {skill}</p>
                                <Posts average={grades} />
                            </div>

                        </div>

                    </div>
                ))}

        </div>
    );
}

