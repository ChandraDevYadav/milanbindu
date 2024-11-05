import React from "react";

// Sample blog data array
const blogs = [
  {
    id: 1,
    image: "/s7.jpg",
    title: "Dramatically procrast extensive testing procedures.",
    name: "John Doe",
    date: "October 30, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
  {
    id: 2,
    image: "/s2.jpg",
    title: "Dramatically procrast extensive testing.",
    name: "Jane Smith",
    date: "October 29, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
  {
    id: 3,
    image: "/s3.jpg",
    title: "Dramatically procrast extensive testing.",
    name: "Bob Lee",
    date: "October 28, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
  {
    id: 4,
    image: "/s4.jpg",
    title: "Dramatically procrast extensive testing.",
    name: "Alice White",
    date: "October 27, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
  {
    id: 5,
    image: "/s5.jpg",
    title: "Dramatically procrast extensive testing.",
    name: "Michael Brown",
    date: "October 26, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
  {
    id: 6,
    image: "/s6.jpg",
    title: "Dramatically procrast extensive testing.",
    name: "Laura Green",
    date: "October 25, 2024",
    description: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
  },
];

const BlogGrid = () => {
  return (
    <div className="container px-4 md:px-36 py-8 md:py-24">

      <div className="grid gap-8">
        {/* First Row: One Column with Flex Layout */}
        {blogs.slice(0, 1).map((blog) => (
          <div key={blog.id}>
            <BlogCard blog={blog} isFirst />
          </div>
        ))}

        {/* Second Row: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.slice(1, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Third Row: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, isFirst }) => {
  return (
    <div
  className={`bg-white shadow-lg rounded-lg overflow-hidden px-2 py-4 group ${
    isFirst ? "flex flex-col md:flex-row" : ""
  }`}
>
  <div className={`overflow-hidden ${isFirst ? "md:w-2/4" : ""}`}>
    <img
      src={blog.image}
      alt={blog.title}
      className={`w-full h-3/5 object-cover transition-transform duration-300 ${
        isFirst ? "md:h-auto" : ""
      } hover:scale-125`}
    />
  </div>
  <div className="p-6 flex-1">
    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600 ${
        isFirst ? "text-3xl" : ""
      }`}>
      {blog.title}
    </h3>
    <p className={`text-gray-500 text-lg font-medium mb-4 ${
        isFirst ? "text-xl mt-6" : ""
      }`}>
     {blog.name} | {blog.date}
    </p>
    <p className="text-gray-700 mb-4 text-lg">{blog.description}</p>
    <button className={`text-white px-10 py-3 rounded font-semibold hover:underline bg-pink-600 mt-4 ${
        isFirst ? "text-xl mt-6" : ""
      }`}>
      Read More
    </button>
  </div>
</div>


  );
};

export default BlogGrid;
