
import { useEffect, useState } from 'react';
import { getPacients } from '../app/api';

const Read = () => {
    const [pacients, setPacients] = useState([]);
    useEffect(() => {
        getPacients()

            .then(guests => { console.log(pacients); setPacients(guests) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Read</h1>
            <table border='1px' >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>Date</th>
                </tr>
                <tBody>
                    {pacients.map((pacient, key) =>
                        <tr key={key}>
                            <td>{pacient.id}</td>
                            <td>{pacient.name}</td>
                            <td>{pacient.surName}</td>
                            <td>{pacient.date}</td>
                        </tr>
                    )}</tBody>
            </table>

        </div >
    )
}

export default Read