import React, { useState } from "react";
import axios from 'axios';

const api = '4KAjksftM-o_9vY_nVtjy5uio-CpD7DSct9BVf2G9w0';
/* for keys and sensitive data i use .env
this one is exception for task demo
*/

const Search = () => {
    const [view, setView] = useState('');
    const clientId = api;
    const [result, setResult] = useState([]);

    function handleChange(e) {
        setView(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const URL = 'https://api.unsplash.com/search/photos?page=1&query=' + view + '&client_id=' + clientId;
        axios.get(URL).then(response => {
            setResult(response.data.results);
        })
    }
    return (
        <section className='w-screen h-screen'>
            <main className='2xl:container'>
                <h1 className='text-white text-4xl mt-32'>Unsplash</h1>
                <p className='text-white pt-8'>The internet's source of: <a
                    className='text-gray-300 underline'
                    href='https://unsplash.com/'>freely-usable images.</a></p>
                <p className='text-white pt-1 pb-10'>Powered by creators everywhere.</p>
                <form
                    onSubmit={handleSubmit}
                    className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type='submit' className="p-2 focus:outline-none focus:shadow-outline"
                        >
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            viewBox="0 0 24 24" className="w-6 h-6"><path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </button>
                    </span>
                    <input type="search" name="photo" id='searchBox'
                           className="w-full py-4 pl-14 text-sm text-gray-200 bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                           placeholder="Search free-high resolution photos" autoComplete='on'
                           onChange={handleChange}
                    />
                </form>
                <p className='text-white mt-4 mb-10'>Trending: <i className='text-gray-300'>flower, wallpapers, backgrounds, happy, love</i></p>

            </main>
            <div
                id='photo-grid'
                className='grid grid-cols-5 gap-5 bg-white rounded-lg'>
                {result.map((photo) => (
                    <img
                        id='show-photo'
                        className='shadow-lg p-4'
                        key={photo.id}
                        src={photo.urls.small} alt={'Unsplash'}/>
                ))}
            </div>
            <footer className='fixed bottom-0 w-1/2'>
                <p className="text-xl p-2 text-center text-white tracking-wider font-mono font-light">© {(new Date().getFullYear())} Łukasz Barylak
                </p>
            </footer>
        </section>
    )
}

export default Search;
