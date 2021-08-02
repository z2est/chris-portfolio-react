import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="flex max-w-screen h-20 bg-gray-900">
                <div className="flex justify-center items-center w-1/6 bg-gray-900">
                    <img src="img/logo.svg" className="px-5"/>
                </div>
                <div className="flex w-96 justify-between items-center px-5">
                    <a className="text-white">Products</a>
                    <a className="text-white">Features</a>
                    <a className="text-white">About us</a>
                </div>
                <div className="flex flex-row-reverse w-4/5 px-10 items-center">
                    <a href="#" className="text-white border text-base font-semibold rounded px-2 py-1 hover:border-transparent hover:bg-white hover:text-gray-900">Contact Us</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;