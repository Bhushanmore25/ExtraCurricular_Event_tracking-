import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
    const [errors, setErrors] = useState({ email: "", password: "", name: "" });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateName = (name) => {
        return name.trim() !== "";
    };

    const savepassword = async () => {
        const { email, password, name } = form;
        let emailError = "";
        let passwordError = "";
        let nameError = "";

        if (!validateName(name)) {
            nameError = "Please enter your name.";
        }
        if (!validateEmail(email)) {
            emailError = "Please enter a valid email.";
        }
        if (!validatePassword(password)) {
            passwordError = "Password must be at least 8 characters long, contain a lowercase letter, an uppercase letter, a number, and a special character.";
        }

        if (nameError || emailError || passwordError) {
            setErrors({ name: nameError, email: emailError, password: passwordError });
            return;  // Stop form submission if errors exist
        }

        const newPassword = { ...form, role: "student" };  // Adding the role here
        console.log(newPassword);
        
        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPassword),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            setForm({ name: "", email: "", password: "" });
            navigate('/user');

        } catch (error) {
            console.error('Error during sign up:', error.message);
            navigate('/login');
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });  // Clear error for the field when user starts typing
    };

    return (
        <>
            <div className="h-screen bg-cover bg-center flex justify-center items-center">
                <div className="flex justify-center w-[30vw] items-center bg-slate-200 h-[70vh] rounded-lg gap-1 flex-col">
                    <h1 className="mt-11 mb-0 text-4xl font-sans font-semibold text-blue-700">Sign Up</h1>
                    <div className="flex justify-center items-center h-[70vh] flex-col gap-5 w-[50vw]">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            className="border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="border border-blue-700 shadow-lg px-2 w-80 rounded-md py-1"
                            value={form.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                        <button
                            className="w-80 py-1 rounded-md bg-blue-700 shadow-lg text-white font-semibold"
                            onClick={savepassword}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default SignUp;
