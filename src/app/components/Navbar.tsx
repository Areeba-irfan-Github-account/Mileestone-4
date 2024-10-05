import Link from 'next/link'
import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";



const Navbar = () => {
    return (
        <div className='bg-lime-600 flex justify-between '>
            <h2 className='text-3xl p-3 font-bold font-serif'>Topic Rendering</h2>
            <div className='flex space-x-5 p-3 justify-between'>
                <Link className='hover:bg-lime-700 p-3 ' href='/'>Home</Link>
                <Link className='hover:bg-lime-700 p-3' href='/ssr'>SSR</Link>
                <Link className='hover:bg-lime-700 p-3' href='/ssg'>SSG</Link>
            </div>
            <div className='flex space-x-2 p-3 justify-between'>
                <LoginLink className={buttonVariants({ variant: "outline" })} >Sign in</LoginLink>
                <RegisterLink className={buttonVariants({ variant: "outline" })}>Sign up</RegisterLink>
            {/* <Link className={buttonVariants({ variant: "outline" })} href={'/Sign-In'}>Sign-In</Link>
            <Link className={buttonVariants({ variant: "outline" })} href={'/Sign-up'}>Sign-up</Link> */}

            </div>

        </div>
    )
}

export default Navbar