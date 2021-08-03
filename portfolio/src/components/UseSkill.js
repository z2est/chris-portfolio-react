import React from 'react';
import BlockChainImg from '../images/blockchain.png';
import MetaBusImg from '../images/metabus.png';
import ConsultImg from '../images/consult.png';

class SkillSection extends React.Component{

    render() {
        return (
            <section className="flex flex-col max-w-screen justify-center px-10">
                <div className="mt-12 text-center w-auto">
                    <h1 className="text-5xl font-light text-gray-900">비즈니스 라인업</h1>
                    <p className="mt-4 text-center text-gray-400">7Connected의 비즈니스 라인업 입니다.</p>
                </div>

                <div className="flex justify-center w-auto">
                    <div className="flex flex-col items-center border border-solid w-72 h-auto m-12 rounded shadow-lg">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8 transform transition duration-500 hover:scale-110" src={ MetaBusImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold px-8 text-center">메타버스</h2>
                        <p className="text-gray-500 text-center mt-2.5 mb-8 px-8">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>

                    <div className="flex flex-col items-center border border-solid w-72 h-auto m-12 rounded shadow-lg">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8 transform transition duration-500 hover:scale-110" src={ BlockChainImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold px-8 text-center">블록체인</h2>
                        <p className="text-gray-500 text-center mt-2.5 mb-8 px-8">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>

                    <div className="flex flex-col items-center border border-solid w-72 h-auto m-12 rounded shadow-lg">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8 transform transition duration-500 hover:scale-110" src={ ConsultImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold px-8 text-center">비즈니스 컨설팅</h2>
                        <p className="text-gray-500 text-center mt-2.5 mb-8 px-8">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SkillSection;