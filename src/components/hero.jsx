import React, { useRef } from 'react'
import { useState } from 'react'
import { Button } from './button';
import { TiLocationArrow } from 'react-icons/ti';

export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVid, setLoadedVid] = useState(0)

    // ========
    const totalVideos = 3
    const nextVideoRef = useRef(null);
    const handleVideoLoad = () => {
        setLoadedVid((prev) => prev + 1)
    }
    /**
     * 0 % 3 => 0 + 1 => 1
     * 1 % 3 => 1 + 1 => 2
     * 2 % 3 => 2 + 1 => 3
     * 3 % 3 => 0 + 1 => 1
     */
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1

    const handleMiniVdClick = () => {
        setClicked(!clicked);
        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`
    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64
                        cursor-pointer overflow-hidden rounded-lg"
                    >
                        <div
                            onClick={handleMiniVdClick}
                            className='origin-center opacity-0 scale-50 transition-all duration-500 ease-in
                                hover:scale-100 hover:opacity-100
                            '
                        >
                            <video src={getVideoSrc(upcomingVideoIndex)}
                                ref={nextVideoRef}
                                loop
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                // Special handler that allows to call a function when data loads
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        src={getVideoSrc(currentIndex)}
                        ref={nextVideoRef}
                        loop
                        muted
                        id='next-video'
                        onLoadedData={handleVideoLoad}
                        className='absolute-center invisible absolute z-20 size-64 object-cover origin-center '
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        onLoadedData={handleVideoLoad}
                        className='absolute left-0 top-0 size-full object-cover object-center'
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5
                    z-40 text-blue-75
                '>
                    Gaming
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className='special-font hero-heading text-blue-100'>
                            redefine
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metagame Layer <br /> Unleash the Play Economy
                        </p>
                        <Button
                            id="watch-trailer"
                            title="Watch trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="!bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
