'use server'

import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
    const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }
    console.log(rawFormData, rawFormData.username === 'admin' && rawFormData.password === 'admin')
    
    if (rawFormData.username === 'admin' && rawFormData.password === 'admin') {
        console.log('Login successful')
        redirect('/')  // Redirects to homepage
    } else {
        return { message: "Username and password are not correct" }
    }
}
