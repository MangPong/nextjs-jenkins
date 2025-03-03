'use client'
import { login } from '../actions/login'
import { useActionState, useEffect } from 'react'

const initialState = {
    message: '' as string,
}

export default function LoginPage() {

    const { state, formAction } = useActionState(login, initialState)
    
    useEffect(() => {
        console.log('state', state)
    }, [state])

    return (
        <>
            <form action={formAction} className="p-3">
                <div className="flex flex-row">
                    <label htmlFor='username'>Username:</label>
                    <input 
                        className='bordered-1'
                        type='text' 
                        id="username" 
                        name="username" 
                        required 
                    />
                </div>

                <div className='flex flex-row'>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        required 
                    />
                </div>

                <div>
                    <p aria-live="polite">{state?.message}</p>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
