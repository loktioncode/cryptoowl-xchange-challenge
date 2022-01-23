import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'



export default function Hero() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div class="hero min-h-screen">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="text-center hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p class="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}
