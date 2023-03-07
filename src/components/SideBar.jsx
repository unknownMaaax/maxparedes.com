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
                          <span className="mr-4">Features</span>
                          <img
                            clasName=""
                            src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                            alt="Arrow"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <ul className="flex flex-col space-y-3">
                            <li className="cursor-pointer">
                              
                              Todo list
                            </li>
                            <li className="cursor-pointer">
                              
                              Calendar
                            </li>
                            <li className="cursor-pointer">
                              
                              Reminders
                            </li>
                            <li className="cursor-pointer">
                              
                              Planning
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
                          <span className="mr-4">Company</span>
                          <img
                            clasName=""
                            src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                            alt="Arrow"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <ul className="flex flex-col space-y-3">
                            <li className="cursor-pointer">History</li>
                            <li className="cursor-pointer">Our Team</li>
                            <li className="cursor-pointer">Blog</li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>
                <li>Careers</li>
                <li>About</li>
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