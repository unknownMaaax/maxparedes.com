import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'

const SideBar = ({ open = false, setOpen }) => {
    return (
      <>
        <Transition show={open}>
          {/* Sliding sidebar */}
          <Transition.Child
            className="fixed right-0 top-0 w-[250px] z-30 h-screen"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div
              id="sidebar"
              className={`fixed right-0 top-0 w-[250px] h-screen  bg-white pt-20 p-8 z-50`}
            >
              <button
                onClick={() => setOpen(false)}
                aria-expanded={open}
                aria-controls="sidebar"
              >
                <img
                  className="absolute top-5 right-5"
                  src="https://img.icons8.com/ios/50/null/delete-sign--v1.png"
                  alt="Close Menu"
                />
              </button>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center text-left">
                          <span className="mr-4">Proyectos</span>
                          <img
                            clasName=""
                            src={`icon-arrow-${open ? "up" : "down"}.svg`}
                            alt="Arrow"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <ul className="flex flex-col space-y-3">
                            <li className="cursor-pointer">
                              
                              Proyecto 1
                            </li>
                            <li className="cursor-pointer">
                              
                              Proyecto 2
                            </li>
                            <li className="cursor-pointer">
                              
                              proyecto 3
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>
                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center text-left">
                          <span className="mr-4">Socials</span>
                          <img
                            clasName=""
                            src={`icon-arrow-${open ? "up" : "down"}.svg`}
                            alt="Arrow"
                          />
                          <a href=""></a>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <ul className="flex flex-col space-y-3">
                            <a href="https://www.linkedin.com/in/maxparedesarenas/">Linkedin</a>  
                            <a href="https://github.com/unknownMaaax">Github</a>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>
              </ul>
            </div>
            {/* ... */}
          </Transition.Child>
          <Transition.Child
            enter="transition-opacity ease-linear duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* ... */}
            <div
              onClick={() => setOpen(false)}
              className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
            ></div>
          </Transition.Child>
        </Transition>
      </>
    );
};
export default SideBar;