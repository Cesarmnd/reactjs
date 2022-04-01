import { useState} from 'react';
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
    
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> console.log('finished'))
    

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
console.log(cartList)

  return (
    <form>
      <input type="text" name='name' value={dataForm.name} onChange={handleOnChange} required/>
      <input type="email" name='email' value={dataForm.email} onChange={handleOnChange} required/>
      <input type="number" name='number' value={dataForm.number} onChange={handleOnChange} required/>
      <button className="btn" onClick={checkout}>Checkout</button>
    </form>
  )
}

export default CheckoutForm