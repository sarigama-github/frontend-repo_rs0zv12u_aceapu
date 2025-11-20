import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, User, Facebook, Github, GraduationCap } from 'lucide-react'
import logoUrl from '../assets/nna-logo.svg'

export default function Auth() {
  const [tab, setTab] = useState('login')
  const [showLp, setShowLp] = useState(false)
  const [showSp, setShowSp] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left branding */}
        <div className="p-6 lg:p-10">
          <div className="flex items-center gap-4 mb-4">
            <img src={logoUrl} alt="NNA" className="w-16 h-16 rounded-xl bg-sky-50 p-2" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">NNA</h1>
              <p className="text-slate-500 text-sm">NextGen Analytics • Data • AI</p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Build your future with Analytics and AI</h2>
          <p className="text-slate-600 mt-2 max-w-xl">Learn faster, grow smarter, and accelerate your career with hands-on projects, dashboards, and automation tools.</p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-2 rounded-full bg-sky-50 text-sky-800 text-sm font-semibold">Courses</span>
            <span className="px-3 py-2 rounded-full bg-sky-50 text-sky-800 text-sm font-semibold">Services</span>
            <span className="px-3 py-2 rounded-full bg-sky-50 text-sky-800 text-sm font-semibold">Power BI Dashboards</span>
            <span className="px-3 py-2 rounded-full bg-sky-50 text-sky-800 text-sm font-semibold">AI Automation</span>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="bg-slate-100 rounded-full p-1 w-fit mb-4 flex">
            <button className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==='login' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow' : 'text-slate-500'}`} onClick={()=>setTab('login')}>Login</button>
            <button className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==='signup' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow' : 'text-slate-500'}`} onClick={()=>setTab('signup')}>Sign Up</button>
          </div>

          {tab==='login' && (
            <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Logged in (demo)')}}>
              <div>
                <label className="text-sm text-slate-500">Email</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input type="email" required placeholder="you@example.com" className="w-full py-3 outline-none bg-transparent" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-500">Password</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3">
                  <Lock className="w-4 h-4 text-slate-400" />
                  <input type={showLp? 'text':'password'} required placeholder="Enter your password" className="w-full py-3 outline-none bg-transparent" />
                  <button type="button" onClick={()=>setShowLp(!showLp)} className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    {showLp ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                    {showLp ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-500"><input type="checkbox"/> Remember me</label>
                <a href="#" className="text-blue-600">Forgot?</a>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl">Sign In</button>
              <div className="flex items-center gap-3 text-slate-400"><hr className="flex-1"/><span>Or continue with</span><hr className="flex-1"/></div>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className="border border-slate-200 rounded-xl py-2.5 font-semibold text-slate-600 flex items-center justify-center gap-2"><Github className="w-4 h-4"/> GitHub</button>
                <button type="button" className="border border-slate-200 rounded-xl py-2.5 font-semibold text-slate-600 flex items-center justify-center gap-2"><Facebook className="w-4 h-4"/> Facebook</button>
              </div>
              <p className="text-xs text-slate-500">Don't have an account? <button type="button" className="text-blue-600" onClick={()=>setTab('signup')}>Create one now</button></p>
            </form>
          )}

          {tab==='signup' && (
            <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Account created (demo)')}}>
              <div className="flex items-center gap-2 text-sky-700 bg-sky-50 rounded-xl px-3 py-2 w-fit mb-1"><GraduationCap className="w-4 h-4"/> Join NNA</div>
              <div>
                <label className="text-sm text-slate-500">Full name</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3">
                  <User className="w-4 h-4 text-slate-400" />
                  <input type="text" required placeholder="Your full name" className="w-full py-3 outline-none bg-transparent" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-500">Email</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input type="email" required placeholder="you@example.com" className="w-full py-3 outline-none bg-transparent" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-500">Password</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3">
                  <Lock className="w-4 h-4 text-slate-400" />
                  <input type={showSp? 'text':'password'} required placeholder="Create a password (min 6 char)" className="w-full py-3 outline-none bg-transparent" />
                  <button type="button" onClick={()=>setShowSp(!showSp)} className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    {showSp ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                    {showSp ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-500">I am a</label>
                <select className="w-full mt-1 px-3 py-3 border border-slate-200 rounded-xl outline-none">
                  <option value="student">Student / Learner</option>
                  <option value="professional">Working Professional</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 rounded-xl">Create Account</button>
              <div className="flex items-center gap-3 text-slate-400"><hr className="flex-1"/><span>Or sign up with</span><hr className="flex-1"/></div>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className="border border-slate-200 rounded-xl py-2.5 font-semibold text-slate-600 flex items-center justify-center gap-2"><Github className="w-4 h-4"/> GitHub</button>
                <button type="button" className="border border-slate-200 rounded-xl py-2.5 font-semibold text-slate-600 flex items-center justify-center gap-2"><Facebook className="w-4 h-4"/> Facebook</button>
              </div>
              <p className="text-xs text-slate-500">By signing up you agree to our <a href="#" className="text-blue-600">Terms & Privacy</a>.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
