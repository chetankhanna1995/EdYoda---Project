import React from 'react'
import EDYODA from '../Resource/EDYODA.svg'



const Navbar = () => {
    return (
        <header className="bg-white ">
            <div className="container px-6 py-2 flex justify-between  mx-8">
                <div className="flex">
                    <a rel="noopener noreferrer" href="/#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={EDYODA} alt="logo" />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/#" className="flex items-center px-4 -mb-1 ">Courses
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/#" className="flex items-center px-4 -mb-1 ">Programe
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg >
                    <button className="px-8 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
                    <button type="button" className="bg-primary1 text-white px-8 py-2 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Join Now</button>

                </div>
            </div>
        </header>
    )
}

export default Navbar