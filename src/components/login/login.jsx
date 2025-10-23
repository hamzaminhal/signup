import React, { useState } from 'react'

function Login() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Login submitted', formValues)
        alert('Logged in!')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="backdrop-blur bg-white/70 border border-white/60 shadow-xl rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">L</div>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-900">Welcome back</h1>
                        <p className="mt-1 text-sm text-gray-500">Log in to your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 justify-start">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formValues.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200 outline-none transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200 outline-none transition pr-12"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute inset-y-0 right-2 rounded-lg px-3 text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition"
                        >
                            Log in
                        </button>

                        <div className="flex items-center justify-between text-sm">
                            <a className="text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

