import Link from 'next/link'


function LoadingPageContent(props) {
    return <div>
        <section className="p-4 lg:p-8 loader dark-custom " >
            <div className="container mx-auto space-y-12">

                <div className="flex flex-row overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <div className="mt-100 flex items-center justify-center flex-1 ">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div> <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">please connect MetaMask wallet to view NFT's</p>

                    </div>

                </div>
                <div>
                    <p className="mt-16 text-center text-sm text-gray-600">
                        <Link href="/login">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                ← Go to Login Page
                            </a>
                        </Link>
                    </p>
                </div>
            </div>

        </section>


    </div>;
}



export default LoadingPageContent;
