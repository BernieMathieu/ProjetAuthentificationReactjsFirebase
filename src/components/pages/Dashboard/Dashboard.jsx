import {auth} from '../../../assets/db/firebase'
import {signOut} from 'firebase/auth'

function Dashboard() {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('deconnexon')
            })
            .catch((error) => {
                console.e(error)
            })
    }
    return (
        <div className='w-full h-screen bg-slate-900 flex items-center justify-center flex-col'>
            <h1 className='"text-center text-slate-50 text-4xl mb-3'>Dashboard</h1>
            <button onClick={handleSignOut} className='block bg-slate-900 px-4 py-2 rounded hover:bg-blue-700'>Se deconnecter</button>
        </div>
    )
}

export default Dashboard
