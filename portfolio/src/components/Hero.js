import React from 'react';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="flex max-w-screen justify-between px-10 py-20 bg-gray-900 text-white">
                <div>
                    <h1>Hello. I'm Gabrial Mact</h1>
                    <h2>저는 Full Stack Engineer입니다.</h2>
                </div>
                <img src="https://t1.daumcdn.net/cfile/tistory/99291E375A87DFF40F?download" alt="hero"></img>
            </div>
            
        );
    }
}

export default HeroSection;