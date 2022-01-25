import React, { useContext } from 'react';
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import axios from 'axios'


export default function MetaMaskSignIn() {

    const { address, chainId, connectWallet, disconnectWallet } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [email, setEmail] = useState("");

    const [selectedNft, setSelectedNft] = useState(0)
    const router = useRouter()
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)


    const alert = <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        META MASK CONNECTED SUCCESSFULLY
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to connect your account? All of your data will be safe on the blockchain.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                            <Link href="/dashboard">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Proceed
                                </button>
                            </Link>

                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>;


    useEffect(() => {
        router.prefetch('/dashboard')
    }, [])

    // If a wallet is connected, show disconnect and switch network options
    if (address) {
        router.push('/dashboard')
    }


    return (
        <>

            <div class="w-full h-screen font-sans bg-cover bg-landscape login-bg">

                <div class="container flex items-center justify-center flex-1 h-full mx-auto">
                    <Link href="/">
                        <img
                            className="mb-12 h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                            alt="Workflow"
                        />
                    </Link>
                    <div class="w-full max-w-lg">
                        <div class="leading-loose">

                            <div class="max-w-sm p-10 m-auto bg-white bg-opacity-5 rounded shadow-xl shadow-blue-500/50">
                                <div>
                                    <button
                                        onClick={() => connectWallet("injected")}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                                        </span>
                                        MetaMask Sign in
                                    </button>
                                    <br></br>
                                    <button
                                        onClick={() => connectWallet("walletconnect")}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                                        </span>
                                        Wallet Connect
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-16 text-center text-sm text-gray-600">
                                <Link href="/">
                                    <a href="#" className="font-medium text-md text-white hover:text-blue-500">
                                        ← Back to home
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}