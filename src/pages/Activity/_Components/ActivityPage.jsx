import React, { useState } from 'react';

const ActivityPage = () => {
  const [genderFilter, setGenderFilter] = useState('');
  const [lookingForGender, setLookingForGender] = useState('');
  const [ageRange, setAgeRange] = useState({ fromAge: 18, toAge: 18 });
  const [countryFilter, setCountryFilter] = useState('');

  const handleFilter = () => {
    // Implement filter logic here
    console.log({ genderFilter, lookingForGender, ageRange, countryFilter });
  };

  return (
    <div className="">
      <div className="bg-white rounded w-full">
        <div className='border-b border-[#ecf0f3] py-4'>
        <h1 className='text-primary text-2xl font-bold text-center'>Filter your search</h1>
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-6 gap-6">
          
          {/* Gender Select */}
          <div className=" w-full">
            <label className="block mb-2 font-medium text-lg">I am a</label>
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="w-full border-2 border-gray-300 py-3 px-2 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Looking For Select */}
          <div className=" w-full">
            <label className="block mb-2 font-medium text-lg">Looking for</label>
            <select
              value={lookingForGender}
              onChange={(e) => setLookingForGender(e.target.value)}
              className="w-full border-2 border-gray-300 py-3 px-2 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age Range Select */}
          <div className=" w-full">
            <label className="block mb-2 font-medium text-lg">Age</label>
            <div className="flex space-x-6">
              <div className="w-full">
                <select
                  value={ageRange.fromAge}
                  onChange={(e) =>
                    setAgeRange({ ...ageRange, fromAge: parseInt(e.target.value) })
                  }
                  className="w-full border-2 border-gray-300 py-3 px-2 rounded"
                >
                  {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <select
                  value={ageRange.toAge}
                  onChange={(e) =>
                    setAgeRange({ ...ageRange, toAge: parseInt(e.target.value) })
                  }
                  className="w-full border-2 border-gray-300 py-3 px-2 rounded"
                >
                  {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Country Select */}
          <div className=" w-full">
            <label className="block mb-2 font-medium text-lg">Country</label>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full border-2 border-gray-300 py-3 px-2 rounded"
            >
              <option value="">Select Country</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="UAE">UAE</option>
              <option value="Qatar">Qatar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              onClick={handleFilter}
              className="bg-pink-600 hover:bg-pink-700 hover:rounded-full text-white font-semibold py-3 px-4 rounded text-xl mt-5"
            >
              Find Your Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
