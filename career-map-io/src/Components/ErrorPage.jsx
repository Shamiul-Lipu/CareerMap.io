import { LottiePlayer } from 'lottie-react'
import Lottie from "lottie-react"
import err from '../assets/Icons/98119-error.json'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='w-2/6'>
                    <Lottie animationData={err} loop={true}></Lottie>
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='button-primary'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage