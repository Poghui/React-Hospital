import { useState } from 'react';
import { Container } from '../styles/styled'
import { createPacient } from '../app/api';


const Create = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [date, setDate] = useState('');
    return (
        <Container>
            <h2>Create</h2>
            <input type="text" placeholder='name' onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='surname' onChange={e => setSurName(e.target.value)} />
            <input type="date" onChange={e => setDate(e.target.value)} />
            <button onClick={() => createPacient({ name, surName, date })}>Create</button>

        </Container>
    )
}

export default Create