import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import { FaCalendar, FaTags } from 'react-icons/fa';

const RecentPost = () => {
    const [recents, setRecents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recent-post')
            .then(res => res.json())
            .then(data => setRecents(data))
    }, [])

    return (
        <div className='my-10'>
            <h4 className='text-center my-10 text-lg text-gray-400'>Recent Posts</h4>
            <div className=' w-10/12 m-auto'>
                <Carousel cols={3} rows={1} gap={10} loop>
                    {
                        recents.map(recent =>
                            <Carousel.Item key={recent.id}>
                                <img style={{ height: '200px', width: '100%' }} src={recent?.image} />
                                <p className='text-center p-3'>{recent.title}</p>
                                <p className='text-center border-y-2 p-3'><small>{recent.details}</small></p>
                                <p className='flex justify-around p-3 text-gray-400'>
                                    <span className='flex text-xs items-center space-x-1 hover:text-black'>
                                        <FaCalendar></FaCalendar>
                                        <small>{recent.date}</small>
                                    </span>
                                    <span className='flex text-xs items-center space-x-1 hover:text-black'>
                                        <FaTags></FaTags>
                                        <small>News</small>
                                    </span>
                                </p>
                            </Carousel.Item>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default RecentPost;