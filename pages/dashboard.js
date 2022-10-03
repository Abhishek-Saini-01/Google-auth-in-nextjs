import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router';

export default function Dashboard(){
    const [user, loading] = useAuthState(auth);
    const route = useRouter()
    if(loading) return <h1>Loading..</h1>
    if (!user) route.push('/auth/login')
    if(user)
    return (
        <div>
            <h1>Welcome to your dashboard {user.displayName}</h1>
            <button className='text-white bg-teal-500 p-4 w-28 font-medium rounded-lg flex align-middle my-10' onClick={()=> auth.signOut()}>Sign Out</button>
        </div>
    )
}