import {useState} from 'react'
import "./CheckOutForm.css"

function CheckOutForm ({onConfirm}) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event)=>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    


    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                     
                    <input 
                        placeholder='Nombre'
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target})=>setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    
                    <input 
                        placeholder='Telefono'
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({target})=>setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    
                    <input 
                        placeholder='Email'
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target})=>setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='Button'>Crear Orden</button>
                </div>
            </form>

        </div>
    )
}

export default CheckOutForm;