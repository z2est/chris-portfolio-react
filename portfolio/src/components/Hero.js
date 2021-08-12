import React from 'react';
import HeroImg from '../images/hero.png';

class HeroSection extends React.Component {
    render() {
        return (
            <div className="flex max-w-screen h-screen justify-between px-10 py-20 bg-gray-900 text-white">
                <div className="flex flex-col justify-center w-1/2">
                    <div>
                        <h1 className="text-5xl mb-4 font-bold">내 손안의 물류플랫폼</h1>
                        <p className="text-3xl">그랩은 빠르고 안전한 물류 서비스입니다.</p>
                    </div>
                    <div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">물류 접수</button>
                        <button>접수 현황</button>
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