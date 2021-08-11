import React from 'react';
import HeroImg from '../images/hero.png';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="flex max-w-screen h-screen justify-between px-10 py-20 bg-gray-900 text-white">
                <div className="flex justify-center items-center w-1/2">
                    <div>
                        <h1 className="text-5xl mb-4 font-bold">All The Best, 7Connected.</h1>
                        <p>우리는 7Connected 입니다.</p>
                    </div>

                </div>
                <div className="flex justify-center items-center w-1/2 pb-40">
                    <img className="w-4/5 object-fit rounded" src={HeroImg} alt="hero"/>
                </div>
            </div>
        );
    }
}

export default HeroSection;