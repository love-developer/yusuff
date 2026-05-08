import React from 'react'
import AnnouncementBar from '../components/ui/AnnouncementBar'
import Card from '../components/ui/Card'
import { enrollmentPaths } from '../data/enrollmentPaths'

const Home = () => {
    return (
        <div className='flex w-full flex-1 flex-col bg-white'>
            <div className='px-[24px] py-[80px]'>
                {/* Main Content */}
                <div className='w-full max-w-[1317px] mx-auto flex flex-col  gap-[50px]'>
                    <div className='w-full max-w-[768px] mx-auto flex flex-col gap-[20px]'>
                        {/* Announcement Bar */}
                        <AnnouncementBar />
                        {/* Hero Section */}
                        <h1 className='text-center text-[40px] leading-[45px] md:text-[60px] font-[700] text-[#111111] md:leading-[68px]'>
                            Choose Your Enrollment Path
                        </h1>
                        <p className='text-center text-[18px] text-[#7C8091]'>
                            Every role is valued equally in our learning community. Select the path that best describes your journey with Seekheed UniverCity.
                        </p>
                    </div>
                    {/* Enrollment Paths Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full max-w-[1024px] mx-auto'>
                        {enrollmentPaths.map((path) => (
                            <Card
                                key={path.id}
                                title={path.title}
                                description={path.description}
                                icon={path.icon}
                                color={path.color}
                                buttonText={path.buttonText}
                                buttonLink={path.buttonLink}
                                status={path.status}
                            />
                        ))}
                    </div>
                    <div className='w-full max-w-[1336px] mx-auto md:h-[20px] flex items-center flex-col md:flex-row justify-between md:justify-center gap-[30px]'>
                        <div className='flex items-center gap-[5px]'>
                            <div className='w-[8px] h-[8px] rounded-full bg-[#FF9600]'></div>
                            <p className='text-[14px] text-[#626D84] font-[400]'>Secure & Encrypted</p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <div className='w-[8px] h-[8px] rounded-full bg-[#FF9600]'></div>
                            <p className='text-[14px] text-[#626D84] font-[400]'>GDPR Compliant</p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <div className='w-[8px] h-[8px] rounded-full bg-[#FF9600]'></div>
                            <p className='text-[14px] text-[#626D84] font-[400]'>24/7 Support</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home