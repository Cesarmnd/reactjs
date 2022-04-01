import { useState} from 'react';
import './checkout.css';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'


function CheckoutForm() {
  const {cartList, totales} = useCartContext()

  const [dataForm, setDataForm] = useState({name: '', email: '', number: ''})

  
  const handleOnChange = (e) => { 
    setDataForm( { ...dataForm, [e.target.name]: e.target.value})
  }

  const checkout = async () =>{

    const list = {
      buyer: dataForm,
      items: cartList.map(obj => ({ id: obj.id, 
                                    name: obj.name, 
                                    price: obj.price })),
      total: totales 
    }

    const db = getFirestore()
    const queryCollectionSet = collection(db, 'orders')
    addDoc(queryCollectionSet, list)
    
    .then(function(docRef) {
      alert(`Thanks for buying in our store! Your id transaction is: "${docRef.id}". We're going to send you an email with more information.`, );
      })
    .catch(err => console.log(err))
    

    const queryCollection = collection(db, 'items')
    const queryUpdateStock = await query(
      queryCollection, where ( documentId(), 'in', cartList.map(obj => obj.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id == res.id).ammount
    })))
    batch.commit()
  }

  return (
    <div className='form'>
      <h1 className='form__title'>Checkout Form</h1>
      <p className='form__description'>Please fill out all the camps with your information:</p>
      <form className='form__container'>
        <label htmlFor="name">Name:</label><input type="text" name='name'  id="name"  value={dataForm.name} onChange={handleOnChange} required/>
        <label htmlFor="email">Email:</label><input type="email" name='email'  id="email"  value={dataForm.email} onChange={handleOnChange} required/>
        <label htmlFor="number">Phone number:</label><input type="number" name='number'  id="number"  value={dataForm.number} onChange={handleOnChange} required/>
        <button className="btn btn-form" onClick={checkout}>Checkout</button>
      </form>
    </div>
  )
}

export default CheckoutForm