'use client'

import { Button } from "@/components/ui/button";
import {useState} from "react";

type AppWelcomeProps = {
    headTitle?: string;
    isShow: boolean;
}
export default function AppWelcome({headTitle, isShow}: AppWelcomeProps) {
    // let title = 'Welcome to COSCI jaaaa';
    const [title, setTitle] = useState('Welcome to COSCI');
    const nowYear = <p>2025</p>;
    const handleClick = () => {
        // title = 'welcome to SWU';
        setTitle('Welcome to SWU');
        alert('Please contact our Admin!');
    }
    return (
        <>
            <h1>{headTitle}</h1>
            <p>{title.toUpperCase()}</p>
            <button className="bg-blue-300 p-3 m-3 text-white rounded-lg" onClick={handleClick}>Click!</button>
            {nowYear}
            {isShow && <p>Date: 10/10/1998</p>}
            {isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>}
            <Button>Click Me</Button>
        </>
    );
}