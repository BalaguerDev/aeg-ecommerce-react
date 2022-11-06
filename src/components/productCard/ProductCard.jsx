import * as React from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import accounting from "accounting";
import './productCard.css';



export default function ProductCard(props) {

  const { item, product, onAdd, onRemove } = props;


  return (
    <div>

      <div className="card">
        <div className="buttonInfoCard" data-bs-toggle="modal" data-bs-target={"#product" + product.id} >
          <img src={product.img} className="card-img-top" alt={product.name} />


          {/* name product */}
          <div className="cardHeader">
            <p className="text-center">{product.name}</p>
          </div>

          {/* title product */}
          <div className="cardBody">
            <p className="card-text">{product.title}</p>
          </div>

        </div>

          {/* price product */}
          <div className="cardPrice">
          <p className="priceText">{accounting.formatMoney(product.price, { symbol: "€", format: "%v %s" })}</p>
          </div>
          

        {/* buttons product */}
        <div className="">


          {/* added cart */}
          {item ? (
             <div className="activeButton btn btn-sm d-flex justify-content-around align-items-center" onClick={() => onAdd(product)} >
              
             <ShoppingCartIcon className=""/>Añadir 1 más
           

         </div>) : 
            
            
            (
              <>
              {/* not added cart */}
            
            <div className="cardButton btn btn-sm d-flex justify-content-around align-items-center" onClick={() => onAdd(product)} >
              
                <AddShoppingCart className=""/>{product.qty}Añadir al carrito
              

            </div>
              
            </>
          )
          }

        </div>
      </div>

      {/* Product Modal */}

      <div className=" cardModal modal fade" id={"product" + product.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <h1 className="modal-title text-center" id="exampleModalLabel">{product.name}</h1>
            <div>
              <p className="subTitle text-center">{product.title}</p>
              <hr />
            </div>

            <div className="modal-body row">
              <div className="col">
                <img src={product.img} className="imgModal card-img-top" alt={product.name} />
              </div>

              <div className="col carac">
                <ul>
                  <li> Id: <strong>{product.id}</strong></li><br />
                  <li> Máquina: <strong>{product.title}</strong></li><br />
                  <li> Tipo: <strong>{product.type}</strong></li><br />
                  <li> Rating: <strong>{product.rating}</strong></li><br />
                  <li> Stock: <strong>{product.stock}</strong></li><br />
                  <li> Precio: <strong>{accounting.formatMoney(product.price, { symbol: "€", format: "%v %s" })} </strong></li><br />
                  <button className="btn btn-sm btn-outline-success" onClick={() => onAdd(product)} >AÑADIR AL CARRITO</button>

                </ul>

              </div>
            </div>

            <div className="col p-3">
              <hr className="divisor" />
              <h6 className="text-center">Descripcion:</h6>
              <p className="description text-justify">{product.description}</p>
            </div>

          </div>
        </div>
      </div>

    </div>



  )
}

