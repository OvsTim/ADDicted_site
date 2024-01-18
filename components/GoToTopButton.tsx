'use client';
import {FaArrowUp} from "react-icons/fa";


export const GoToTopButton = () => {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button
            aria-label="go up"
            className='fixed bottom-20 right-10 rounded-3xl bg-gray-300 p-2.5 md:invisible z-50'
            onClick={scrollToTop}
        >
            <FaArrowUp/>
        </button>
    )
}
