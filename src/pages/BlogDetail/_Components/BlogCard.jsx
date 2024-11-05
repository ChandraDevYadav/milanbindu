import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaComments, FaDribbble, FaFacebookF, FaGoogle, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import BottomCont from './BottomCont'
import AddComment from './AddComment'

const BlogCard = () => {
    return (
        <><div className='bg-white'>
            <div className='grid grid-cols-1'>
                <div>
                    <div className="overflow-hidden">
                        <img
                            src='/bd1.jpg'
                            alt=''
                            className="w-full h-full object-cover hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className='px-2 md:px-6'>
                        <h1 className='text-xl md:text-3xl font-bold text-primary'>Serenity hassir taken posseson of mying entire</h1>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-3 mt-4'>
                            <div className='flex justify-start items-center gap-2'>
                                <MdOutlineCalendarMonth className='text-xl text-gray-700' />
                                <p className='text-md md:text-lg text-gray-500 font-medium'>January 01, 2022 10:59 am</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <FaUser className='text-xl text-gray-700' />
                                <p className='text-primary text-xl font-bold'> Chan Dra Dev</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <FaComments className='text-xl text-gray-700' />
                                <p className='text-primary text-lg font-medium'> 09 Comments</p>
                            </div>
                        </div>
                        <p className='my-6 font-medium text-lg text-gray-500'>Serenity hassir taken posseson of mying entire soung like
                            these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens
                            whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with
                            my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing
                            am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr
                            Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                        <div className='bg-pink-600 py-8 px-10 rounded'>
                            <p className='text-2xl text-white font-medium'>Dynamicaly recaptiuaze distribute technologies wherease turnkey channels and onotonec provide aces
                                to resource levelng expert vias worldwide deve in rabes uoliticly extend aserser are diverse vortals.</p>
                            <p className='text-end text-white text-xl mt-4 font-bold'>Code Hustler</p>
                        </div>
                        <p className='text-gray-500 font-medium text-lg mt-6'>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart
                            create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy
                            my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of
                            exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the
                            exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe
                            wonderful.</p>
                        <img src="/bd2.jpg" alt="" className='w-full h-full mt-6' />
                        <p className='text-gray-500 font-medium text-lg mt-6'>
                            Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.
                        </p>
                        <div className="relative w-full h-full mt-6">
                            <img src="/bd3.jpg" alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />

                            {/* Play Button with emitting effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative flex items-center justify-center">
                                    {/* Emitting Effect */}
                                    <span className="absolute inline-flex h-16 w-16 rounded-full bg-white opacity-90 animate-ping delay-1000 "></span>
                                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-white opacity-90 animate-ping delay-1000"></span>

                                    {/* Play Button Icon */}
                                    <button className="relative z-10 flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600">
                                        <FaPlay className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-500 font-medium text-lg mt-6 border-b border-gray-300 pb-6'>Serenity hassir taken posseson of
                            mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of
                            exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste
                            sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like
                            mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my
                            talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                        <div className='flex flex-col md:flex-row justify-start md:justify-between items-center my-10'>
                            <div className='grid grid-cols-2 md:grid-cols-4 justify-start items-center gap-4'>
                                <p className='border border-gray-400 rounded py-3 px-6 font-medium text-primary hover:bg-pink-600 hover:text-white cursor-pointer'>Charity</p>
                                <p className='border border-gray-400 rounded py-3 px-6 font-medium text-primary hover:bg-pink-600 hover:text-white cursor-pointer'>NonProfit</p>
                                <p className='border border-gray-400 rounded py-3 px-6 font-medium text-white hover:bg-pink-600 hover:text-white cursor-pointer bg-pink-600'>Admission</p>
                                <p className='border border-gray-400 rounded py-3 px-6 font-medium text-primary hover:bg-pink-600 hover:text-white cursor-pointer'>Exams</p>
                            </div>
                            <div className='flex justify-start items-center gap-4 mt-6 md:mt-0'>
                                <div className='bg-[#3b5998] hover:rounded-full p-3 cursor-pointer'>
                                    <FaFacebookF className='text-white text-xl' />
                                </div>
                                <div className='bg-[#ea4c89] hover:rounded-full p-3 cursor-pointer'>
                                    <FaDribbble className='text-white text-xl' />
                                </div>
                                <div className='bg-[#55acee] hover:rounded-full p-3 cursor-pointer'>
                                    <FaTwitter className='text-white text-xl' />
                                </div>
                                <div className='bg-[#dd4b39] hover:rounded-full p-3 cursor-pointer'>
                                    <FaGoogle className='text-white text-xl' />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-6'>
                <div className='flex justify-start items-center gap-2 text-pink-600 font-medium text-xl'>
                    <FaAngleDoubleLeft />
                    <p>Previous Article</p>
                </div>
                <div className='flex justify-start items-center gap-2 text-pink-600 font-medium text-xl'>
                    <p>Next Article</p>
                    <FaAngleDoubleRight />
                </div>
            </div>
            <BottomCont/>
            <AddComment/>
            </>
    )
}

export default BlogCard