'use client'

type AppWelcomeProps = {
    headTitle?: string;
    isShow: boolean;
}
export default function AppWelcome({headTitle, isShow}: AppWelcomeProps) {
    const title = 'Welcome to COSCI jaaaa';
    const nowYear = <p>2025</p>;
    const handleClick = () => {
        alert('Please contact our Admin!');
    }
    return (
        <>
            <h1>{headTitle}</h1>
            <p>{title.toUpperCase()}</p>
            {nowYear}
            {isShow && <p>Date: 10/10/1998</p>}
            {isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>}
            <button className="bg-blue-300 p-3 m-3 text-white rounded-lg" onClick={handleClick}>Click!</button>
        </>
    );
}