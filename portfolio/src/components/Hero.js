import React from 'react';
import HeroImg from '../images/hero.png';
import './styles/Hero.scss';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="container-main flex max-w-screen h-screen justify-between px-10 py-20 bg-gray-900 text-white bg-cover">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="text-center">
                        <h1 className="text-5xl mb-4 font-lighter">Change is coming like a wave</h1>
                        <p className="text-2xl">물류를 바꾸는 혁신. Grab</p>
                    </div>
                    <div className="flex w-80 m-5 justify-between">
                        <button className="w-2/5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Google Play</button>
                        <button className="w-2/5 bg-blue-500 hover:bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">AppStore</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;