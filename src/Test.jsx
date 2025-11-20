import { Link } from 'react-router-dom'

export default function Test(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Routes OK</h1>
        <Link to="/login" className="underline text-cyan-400">Go to Login</Link>
      </div>
    </div>
  )
}
