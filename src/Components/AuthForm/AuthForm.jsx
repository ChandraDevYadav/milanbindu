import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true); // State to toggle between signup and login
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthday: '',
        gender: '',
        lookingFor: '',
        maritalStatus: '',
        city: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (isSignUp && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (isSignUp && !formData.name) newErrors.name = 'Full name is required';
        if (isSignUp && !formData.birthday) newErrors.birthday = 'Birthday is required';
        if (isSignUp && !formData.gender) newErrors.gender = 'Please select your gender';
        if (isSignUp && !formData.lookingFor) newErrors.lookingFor = 'Please select what you are looking for';
        if (isSignUp && !formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        if (isSignUp && !formData.city) newErrors.city = 'City is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(isSignUp ? 'Sign up successful' : 'Login successful', formData);
            // Submit form data to the backend
        }
    };

    const handleSocialLogin = (platform) => {
        // Handle social login logic here
        console.log(`Login with ${platform}`);
        // You can redirect to the authentication URL for each platform here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    {isSignUp ? 'Create Your Profile' : 'Login'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Common fields for login and signup */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 mt-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Enter Your Email"
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password*
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 mt-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Enter Your Password"
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>

                    {/* Additional fields for signup only */}
                    {isSignUp && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                    Username*
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Enter Your Username"
                                />
                                {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
                            </div>

                            {/* Repeat the rest of the fields as in your original form */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                                    Confirm Password*
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Confirm Your Password"
                                />
                                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                            </div>

                            {/* Profile Details Section */}
                            <h3 className="text-lg font-semibold text-gray-700">Profile Details</h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Enter Your Full Name"
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="birthday">
                                    Birthday*
                                </label>
                                <input
                                    type="date"
                                    id="birthday"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.birthday ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {errors.birthday && <p className="text-sm text-red-500">{errors.birthday}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="gender">
                                    I am a*
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Man">Man</option>
                                    <option value="Woman">Woman</option>
                                </select>
                                {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="lookingFor">
                                    Looking for a*
                                </label>
                                <select
                                    id="lookingFor"
                                    name="lookingFor"
                                    value={formData.lookingFor}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.lookingFor ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                >
                                    <option value="" disabled>Select Preference</option>
                                    <option value="Man">Man</option>
                                    <option value="Woman">Woman</option>
                                </select>
                                {errors.lookingFor && <p className="text-sm text-red-500">{errors.lookingFor}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="maritalStatus">
                                    Marital Status*
                                </label>
                                <select
                                    id="maritalStatus"
                                    name="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.maritalStatus ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </select>
                                {errors.maritalStatus && <p className="text-sm text-red-500">{errors.maritalStatus}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="city">
                                    City*
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 mt-1 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    placeholder="Enter Your City"
                                />
                                {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </form>

                {/* Social Login Section */}
                <div className="flex flex-col items-center mt-4">
                    <p className="text-sm text-gray-600">Or</p>
                    <div className="flex space-x-4 mt-2">
                        <button
                            onClick={() => handleSocialLogin('Google')}
                            className="px-4 py-2 font-semibold w-full text-white bg-red-500 rounded hover:bg-red-600"
                        >
                            <FaGoogle/>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Facebook')}
                            className="px-4 py-2 font-semibold text-white w-full bg-blue-700 rounded hover:bg-blue-800"
                        >
                            <FaFacebookF/>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('LinkedIn')}
                            className="px-4 py-2 font-semibold text-white w-full bg-blue-800 rounded hover:bg-blue-900"
                        >
                            <FaLinkedinIn/>
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            {isSignUp ? ' Log In' : ' Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
