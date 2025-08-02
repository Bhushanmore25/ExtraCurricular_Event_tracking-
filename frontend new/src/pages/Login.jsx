import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "", role: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const verifypassword = async () => {
        const { email, password } = form;
        let emailError = "";
        let passwordError = "";

        if (!validateEmail(email)) {
            emailError = "Please enter a valid email.";
        }
        if (!validatePassword(password)) {
            passwordError = "Password must be at least 8 characters long, contain a lowercase letter, an uppercase letter, a number, and a special character.";
        }

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return;  // Stop form submission if errors exist
        }

        const newPassword = { ...form, role: "student" };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPassword)
            });

            if (!response.ok) {
                throw new Error('Invalid login credentials');
            }

            setForm({ email: "", password: "", role: "" });
            navigate('/user');
        } catch (error) {
            console.error('Error during login:', error.message);
            navigate('/signup');
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });  // Clear error for the field when user starts typing
    };

    return (
        <div className="h-screen bg-cover bg-center flex justify-center items-center">
            <div className="flex justify-center w-[30vw] items-center bg-slate-200 h-[70vh] rounded-lg gap-1 flex-col">
                <h1 className="mt-11 mb-0 text-4xl font-sans font-semibold text-blue-700">Login</h1>
                <div className="flex justify-center items-center h-[70vh] flex-col gap-5 w-[50vw]">
                    <input 
                        type="text" 
                        placeholder="Enter Email" 
                        className="border border-blue-700 px-2 w-80 rounded-md py-1" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        className="border border-blue-700 px-2 w-80 rounded-md py-1" 
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <button 
                        className="w-80 py-1 rounded-md bg-blue-700 text-white font-semibold"
                        onClick={verifypassword}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
