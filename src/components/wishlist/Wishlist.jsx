import './wishlist.css';

import React from 'react'
import WishListItem from './WishListItem';

const Wishlist = (props) => {
    const { item, cartItems, product, onAdd, onRemove } = props;
  return (
    <div>
        <div className="cart-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-heading mb-10">My wishlist</div>
                        <div className="table-wishlist">
                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                <thead>
                                    <tr>
                                        <th width="45%">Nombre Producto</th>
                                        <th width="15%">Precio </th>
                                        <th width="15%">Disponibilidad</th>
                                        <th width="15%"></th>
                                        <th width="10%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    
                                <WishListItem product={product} item={cartItems.find((x) => x.id === product.id)} onAdd={onAdd} onRemove={onRemove}/>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist

