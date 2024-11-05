import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterForm from './FilterForm';

const GroupMain = () => {
    const [showDialog, setShowDialog] = useState(false);
  const [genderFilter, setGenderFilter] = useState('');
  const [lookingForGender, setLookingForGender] = useState('');
  const [ageRange, setAgeRange] = useState({ fromAge: 18, toAge: 100 });
  const [countryFilter, setCountryFilter] = useState('');

  const handleFilter = () => {
    // Implement filter logic here
  };
    return (
        <div>
            <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-52' style={{ backgroundImage: "url('/pageheader (1).jpg')" }}>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold text-primary'>Milan Bindu All Groups</h1>
                    <div className='flex justify-center mt-5 items-center gap-4 text-lg'>
                        <p className='text-primary font-medium pr-4 border-r-2 border-gray-300'>Home</p>
                        <Link to='/' className='font-medium text-pink-600'>Groups</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute w-full mt-3 md:mt-0 md:top-[36rem]'>
      <FilterForm
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        lookingForGender={lookingForGender}
        setLookingForGender={setLookingForGender}
        ageRange={ageRange}
        setAgeRange={setAgeRange}
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        handleFilter={handleFilter}
      />
    </div>
        </div>
    )
}

export default GroupMain