import React from 'react'
import { useDispatch } from 'react-redux'
import { incCartCount , decCartCount} from './myToolkit/NewCartSlice'

const Card = () => {

  const dispatcher = useDispatch()

  const handleInc = ()=>{
    dispatcher(incCartCount())
  }
  const handleDec = ()=>{
    dispatcher(decCartCount())
  }


  return (
    <div>
      <div className='card-main my-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://img.freepik.com/free-vector/shopping-basket-fresh-fruits-vegetables_1284-17179.jpg?w=2000" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cart</h5>
                    <p className="card-text">Add items to buy</p>
                    <button className="btn btn-primary my-2" onClick={handleInc} >Add product</button>
                    <button className="btn btn-primary my-2" onClick={handleDec}  >Remove product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card


