// export default function Home
import Nav from '../components/Nav'
import Link from 'next/link'
import { useState } from 'react';

const About = () => {
    const [count, setCount] = useState(0)
    const Func = () => {
        alert('hello')
    }
    return (
        <div>
            <button onClick={Func}>Click</button>
            <p>{count}</p>
            <h1>You are in the home page</h1>
        </div>
    )
}


export default About