import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title : 'What is React?',
        content : 'React is a frontend framework'
    },
    {
        title : 'Why React?',
        content : 'React is a frontend framework'
    },
    {
        title : 'How to use React?',
        content : 'React is a frontend framework'
    }
        
]

export default () =>{
    return(
        
        <div>
            <Accordion items={items}/>
        </div>
    );
};