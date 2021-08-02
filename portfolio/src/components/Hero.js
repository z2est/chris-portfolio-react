import React from 'react';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="flex max-w-screen justify-between px-10 py-20 bg-gray-900 text-white">
                <div className="flex justify-center items-center w-1/2">
                    <div>
                        <h1 className="text-5xl mb-4 font-bold">All The Best, 7Connected.</h1>
                        <p>우리는 7Connected 입니다.</p>
                    </div>

                </div>
                <div className="flex justify-center w-1/2">
                    <img className="rounded h-auto" src="http://placehold.it/500" alt="hero"></img>
                </div>
            </div>
        );
    }
}

export default HeroSection;