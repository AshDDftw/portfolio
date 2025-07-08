'use client'

import React, { useEffect } from 'react';
import './skills.css'; 

export default function Skills(){
    useEffect(() => {
        const icons = document.querySelectorAll('.skills img');
        // const text = document.querySelector('.skills-text');
        
        icons.forEach(icon => {
            // Random position
            const top = Math.floor(Math.random() * 80) + 5; // 5% to 85%
            const left = Math.floor(Math.random() * 80) + 5; // 5% to 85%
            
            // Random rotation between -30 and 30 degrees
            const rotation = Math.floor(Math.random() * 60) - 30;
            
            icon.style.top = `${top}%`;
            icon.style.left = `${left}%`;
            icon.style.transform = `rotate(${rotation}deg)`;
        });
    }, []);

    return(
        <div className='skills'>
            <p className='skills-text'>I am always looking to improve my techstack (and hope to add more icons)</p>
            <img className='js' src='techstackicons/js.png' alt='javascript'></img>
            <img className='github' src='techstackicons/github.png' alt='github'></img>
            <img className='as' src='techstackicons/androidstudio.png' alt='androidstudio'></img>
            <img className='aws' src='techstackicons/aws.png' alt='aws'></img>
            <img className='cpp' src='techstackicons/cpp.png' alt='cpp'></img>
            <img className='firebase' src='techstackicons/firebase.png' alt='firebase'></img>
            <img className='flutter' src='techstackicons/flutter.png' alt='flutter'></img>
            <img className='git' src='techstackicons/git.png' alt='git'></img>
            <img className='go' src='techstackicons/go.png' alt='go'></img>
            <img className='java' src='techstackicons/java.png' alt='java'></img>
            <img className='kotlin' src='techstackicons/kotlin.png' alt='kotlin'></img>
            <img className='mongo' src='techstackicons/mongo.png' alt='mongo'></img>
            <img className='nodejs' src='techstackicons/nodejs.png' alt='nodejs'></img>
            <img className='python' src='techstackicons/python.png' alt='python'></img>
            <img className='tailwind' src='techstackicons/tailwind.png' alt='tailwind'></img>
            <img className='typescript' src='techstackicons/typescript.png' alt='typescript'></img>
            <img className='tensorflow'  src='techstackicons/tensorflow.png' alt='tensorflow'></img>
            <img className='pytorch' src = 'techstackicons/pytorch.png' alt='pytorch'></img>
            <img className='opencv' src = 'techstackicons/opencv.png' alt='opencv'></img>
            <img className='streamlit' src = 'techstackicons/streamlit.png' alt='streamlit'></img>
            <img className='springboot' src = 'techstackicons/springboot.png' alt='springboot'></img>
        </div>
    )
}