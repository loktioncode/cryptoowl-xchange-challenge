import Link from 'next/link'
import Loader from './Loader'

function LoadingPageContent(props) {
    return <div>
        <section className="p-4 lg:p-8 loader dark-custom " >
       
            <div className="container mx-auto space-y-12">
            <p className="mt-16 text-center text-lg text-white"> PLEASE CONNECT YOUR WALLET TO ACCESS YOUR DASHBOARD</p>
                <Loader />
                <div>
                    <p className="mt-16 text-center text-sm text-gray-600">
                        {
                            props.page && <Link href="/login">
                                <a href="#" className="font-medium text-white hover:text-indigo-500">
                                    ← Go to Login Page
                                </a>
                            </Link>
                        }
                    </p>
                </div>
            </div>

        </section>


    </div>;
}



export default LoadingPageContent;
