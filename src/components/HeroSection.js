import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='http://localhost/src/components/pages/videos/cat-video.mp4' alt='cat video' autoPlay loop muted />
            <h1>Welcome to this terrible bank. It's a displeasure to meet you!</h1>
            <p>Open a bank account today! Or not, we really don't care anyways!</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                    </Button>
            </div>
        </div>
    );
}
 
export default HeroSection;

/*
<Button 
    className='btns' 
    buttonStyle='btn--primary'
    buttonSize='btn--large'>
        WATCH TRAILER <i className='far fa-arrow-alt-circle-right' />
</Button>
*/
