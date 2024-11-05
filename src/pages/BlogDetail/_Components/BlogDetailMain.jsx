import React from 'react'
import BlogSideSea from './BlogSideSea'
import RecentPost from './RecentPost'
import BlogCard from './BlogCard'

const BlogDetailMain = () => {
  return (
    <div className='px-4 md:px-28 py-8 md:py-16'>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-6">
                <BlogCard/>
            </div>
            <div className="col-span-8 md:col-span-2">
                <BlogSideSea/>
                <RecentPost/>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailMain