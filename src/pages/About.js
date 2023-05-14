import React, {useState} from 'react';

const About = () => {

    const [name, setName] = useState(0)
    const [person, setPerson] = useState("")
   // var name = 0;
    const inc = () =>{

        setName(name + 1)
        console.log(name)
    }

    const grabName = (e) => {
        setPerson(e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(person)
    }
    return (
        <div>
            <h1> About ME</h1>
            <h1>{person}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={person}onChange={grabName}/>
                <button type="submit">Click</button>
            </form>
            <button onClick={inc}>Add</button>
        </div>
    );
}

export default About;
