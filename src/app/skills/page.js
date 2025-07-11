'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import './skills.css'; 

export default function Skills(){
    useEffect(() => {
        const icons = document.querySelectorAll('.skills img, .skills .next-image');
        
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
            <Image className='js' src='/techstackicons/js.png' alt='javascript' width={64} height={64} />
            <Image className='github' src='/techstackicons/github.png' alt='github' width={64} height={64} />
            <Image className='as' src='/techstackicons/androidstudio.png' alt='androidstudio' width={64} height={64} />
            <Image className='aws' src='/techstackicons/aws.png' alt='aws' width={64} height={64} />
            <Image className='cpp' src='/techstackicons/cpp.png' alt='cpp' width={64} height={64} />
            <Image className='firebase' src='/techstackicons/firebase.png' alt='firebase' width={64} height={64} />
            <Image className='flutter' src='/techstackicons/flutter.png' alt='flutter' width={64} height={64} />
            <Image className='git' src='/techstackicons/git.png' alt='git' width={64} height={64} />
            <Image className='go' src='/techstackicons/go.png' alt='go' width={64} height={64} />
            <Image className='java' src='/techstackicons/java.png' alt='java' width={64} height={64} />
            <Image className='kotlin' src='/techstackicons/kotlin.png' alt='kotlin' width={64} height={64} />
            <Image className='mongo' src='/techstackicons/mongo.png' alt='mongo' width={64} height={64} />
            <Image className='nodejs' src='/techstackicons/nodejs.png' alt='nodejs' width={64} height={64} />
            <Image className='python' src='/techstackicons/python.png' alt='python' width={64} height={64} />
            <Image className='tailwind' src='/techstackicons/tailwind.png' alt='tailwind' width={64} height={64} />
            <Image className='typescript' src='/techstackicons/typescript.png' alt='typescript' width={64} height={64} />
            <Image className='tensorflow' src='/techstackicons/tensorflow.png' alt='tensorflow' width={64} height={64} />
            <Image className='pytorch' src='/techstackicons/pytorch.png' alt='pytorch' width={64} height={64} />
            <Image className='opencv' src='/techstackicons/opencv.png' alt='opencv' width={64} height={64} />
            <Image className='streamlit' src='/techstackicons/streamlit.png' alt='streamlit' width={64} height={64} />
            <Image className='springboot' src='/techstackicons/springboot.png' alt='springboot' width={64} height={64} />
            <Image className='csharp' src='/techstackicons/csharp.png' alt='csharp' width={64} height={64} />
            <Image className='unity' src='/techstackicons/unity.png' alt='unity'  width={64} height={64} />
        </div>
    )
}