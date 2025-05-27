'use client'

export default function AppWelcome() {
    const title = 'Welcome to COSCI jaaaa';
    const nowYear = <p>2025</p>;
    const isShow = true;
    const handleClick = () => {
        alert('Please contact our Admin!');
    }
    return (
        <>
        <p>{title.toUpperCase()}</p>
        {nowYear}
        {isShow && <p>Date: 10/10/1998</p>}
        {isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>}
        <button className="bg-blue-300 p-3 m-3 text-white rounded-lg" onClick={handleClick}>Click!</button>
        </>
    );
}