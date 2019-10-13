import React, { useState } from 'react';

//importando a api
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/sessions', { email });

        const { _id } = response.data;
        //console.log(_id);

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>
                Offer <strong>spots</strong> for developers and find <strong>talents</strong> for your company
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL *</label>
            <input 
                id="email"
                type="email"
                placeholder="Your best email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Sign in</button>
            </form>
        </>
    )
}