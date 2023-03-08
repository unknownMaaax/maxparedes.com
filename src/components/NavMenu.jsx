import React from 'react'
import {Menu, Transition} from '@headlessui/react'

function NavMenu() {
  return (
    <nav>
        <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
            <li>
                <Menu>
                    <Menu.Button className="hover:text-almost-black">Proyectos {" "}
                        <img src="icon-arrow-down.svg"
                        alt="Down arrow" 
                        className="inline-block ml-1" />
                    </Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"  
                    >
                        <Menu.Items className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'bg-gray-100 text-gray-900'}
                                block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                href="/"
                                >
                                Proyecto 1
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'bg-gray-100 text-gray-900'}
                                block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                href="/"
                                >
                                Proyecto 2
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'bg-gray-100 text-gray-900'}
                                block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                href="/"
                                >
                                Proyecto 3
                                </a>
                            )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li>
            <li>
                <Menu>
                    <Menu.Button className="hover:text-almost-black">Socials {" "}
                    <img src="icon-arrow-down.svg"
                        alt="Down arrow" 
                        className="inline-block ml-1" />
                    </Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"  
                    >
                        <Menu.Items className="absolute right-0 mt-4 w-40 py3 rounded-md shadow-lg
                         bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'bg-gray-100 text-gray-900'}
                                block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                href="https://www.linkedin.com/in/maxparedesarenas/"
                                >
                                Linkedin
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'bg-gray-100 text-gray-900'}
                                block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                href="https://github.com/unknownMaaax"
                                >
                                Github 
                                </a>
                            )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li>
        </ul> 
    </nav>
  )
}

export default NavMenu