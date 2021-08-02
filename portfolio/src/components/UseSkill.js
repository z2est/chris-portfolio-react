import React from 'react';
import BlockChainImg from '../images/blockchain.png';
import MetaBusImg from '../images/metabus.png';
import ConsultImg from '../images/consult.png';

class SkillSection extends React.Component{

    render() {
        return (
            <section className="flex flex-col justify-center">
                <div className="mt-12 text-center w-auto">
                    <h1 className="text-5xl font-semibold text-gray-900">비즈니스 라인업</h1>
                    <p className="mt-4 text-center text-gray-400">7Connected의 비즈니스 라인업 입니다.</p>
                </div>

                <div className="flex justify-between item-">
                    <div className="flex flex-col items-center border-2 border-solid w-1/3 h-auto m-12 rounded">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8" src={ MetaBusImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold">메타버스(Metabus)</h2>
                        <p className="text-gray-500 text-center my-2.5">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>

                    <div className="flex flex-col items-center border-2 border-solid w-1/3 h-auto m-12 rounded">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8" src={ BlockChainImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold">블록체인(Blockchain)</h2>
                        <p className="text-gray-500 text-center my-2.5">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>

                    <div className="flex flex-col items-center border-2 border-solid w-1/3 h-auto m-12 rounded">
                        <div className="bg-white-300">
                            <img className="object-fit h-full w-full p-8" src={ ConsultImg } alt="7Connected"></img>
                        </div>
                        <h2 className="text-gray-900 text-xl font-bold">비즈니스 컨설팅(Consulting)</h2>
                        <p className="text-gray-500 text-center my-2.5">메타버스는 7Connected의 가상 환경 플랫폼입니다.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SkillSection;