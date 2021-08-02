import React from 'react';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="flex max-w-screen justify-between px-10 py-20 bg-gray-900 text-white">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <h1 className="text-4xl">Hello. I'm Gabrial Mact</h1>
                    <h2>저는 Full Stack Engineer입니다.</h2>
                </div>
                <div className="flex justify-center w-1/2">
                    <img className="rounded h-auto" src="http://placehold.it/500" alt="hero"></img>
                </div>
            </div>
            
        );
    }
}

export default HeroSection;