import React, { useContext } from 'react'
import OrderContext from '../../../../context/OrderContext';

export default function EmptyMenuAdmin() {

  const { resetMenu } = useContext(OrderContext);

  return (
       <div className="cards-container">
          <p>Il n'y a pas encore de menu</p>
          <button onClick={resetMenu}>Générer de nouveaux le menu</button>
        </div>
  )
}