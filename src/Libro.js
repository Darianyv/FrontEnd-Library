import axios from 'axios';
import { useEffect, useState } from 'react';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/libros')
            .then(response => setLibros(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Libros</h1>
            <ul>
                {libros.map(libro => (
                    <li key={libro.id}>{libro.titulo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Libros;