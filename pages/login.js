import { useState, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import NftList from '../components/NftList'
import Main from '../components/Main'

import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import axios from 'axios'


export default function MetaMaskSignIn() {
    const { address, chainId, connectWallet, disconnectWallet } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [email, setEmail] = useState("");
    const [nftData, setNftData] = useState([]);
    const [selectedNft, setSelectedNft] = useState(0)


    useEffect(() => {

        // Prefetch the dashboard page
        // router.prefetch('/dashboard')
        const getMyNfts = async () => {
            const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x0570408Ba92aC0F8C3a19C0890f9a3829CFf4804')
            // alert(openseaData.data.assets)
            setNftData(openseaData.data.assets)
        }

        return getMyNfts()
    }, [])


    // If a wallet is connected, show disconnect and switch network options
    if (address) {
        return (
            <>
                Address: {address}
                <br />
                Chain ID: {chainId}
                <br />

                <button onClick={() => switchNetwork(1)}>
                    Switch to Mainnet
                </button >

                <button onClick={() => switchNetwork(4)}>
                    Switch to Rinkeby
                </button>

                <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={disconnectWallet}>
                    Disconnect
                </button>
                {
                    nftData.length > 0 && (
                        <>
                            <Main nftListData={nftData} selectedNft={selectedNft} />
                            <NftList nftListData={nftData} setSelectedNft={setSelectedNft} />
                        </>
                    )
                }

            </>
        )
    }

    // const handleSubmit = useCallback((e) => {
    //     e.preventDefault()
    //     console("TRIGEEEEEEREDDDDDDD!!!")

    //     fetch('/api/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             /* Form data */
    //         }),
    //     }).then((res) => {
    //         // Do a fast client-side transition to the already prefetched dashboard page
    //         if (res.ok) router.push('/dashboard')
    //     })
    // }, [])


    return (
        <>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>

                        <Link href="/">
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                        </Link>

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                {address}
                            </a>
                        </p>
                    </div>


                    <div>
                        <button
                            onClick={() => connectWallet("injected")}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            MetaMask Sign in
                        </button>
                        <br></br>
                        <button
                            onClick={() => connectWallet("walletlink")}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            CoinBase
                        </button>

                    </div>

                </div>
            </div>
            <div>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <Link href="/">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            ← Back to home
                        </a>
                    </Link>
                </p>
            </div>
        </>
    )
}