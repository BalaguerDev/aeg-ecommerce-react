import accounting from "accounting";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './basket.css';
import { Link } from "react-router-dom";

export default function Basket(props) {

    const {cartItems, onAdd, onRemove, onDelete} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    const sinIva = itemsPrice * 0.79;
    const ivaCart = itemsPrice * 0.21;
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block my-0">
            <h3 className="text-center mb-4">Carrito</h3>
            <div className="scrollElement">
            {cartItems.length === 0 && <div>El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                
                <div key={item.id}>
                    <div  className="row itemDivCart row align-items-center">
                        <div className="col">
                            <img src={item.img} alt={item.name} className="img-fluid" data-bs-toggle="modal" data-bs-target={"#product" + item.id} />
                        </div>

                        <div className="col-10">
                            <div className="col d-flex justify-content-between align-items-center">
                                <p className="titleNameCard my-2  w-75 "data-bs-toggle="modal" data-bs-target={"#product" + item.id} >{item.title}</p>
                                <DeleteOutlineIcon className=" deleteButton w-25" onClick={() => onDelete(item)}/>
                            </div>

                            <div className="col d-flex justify-content-between align-items-center">
                                <div className="w-75">
                                    <span className="col-6 text-muted ">{item.qty} x </span> &nbsp;{accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                                </div>

                                 <div className="w-25 d-flex justify-content-around">
                                    <RemoveCircleOutlineIcon className=" removeButton" onClick={() => onRemove(item)}/>
                                    <AddCircleOutlineIcon className=" addButton" onClick={() => onAdd(item)}/>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                </div>

            ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <div className="row mt-3">
                    <div className="col-2">Coste sin iva</div>
                    <div className="col-1 d-flex justify-content-end">{sinIva.toFixed(2)} €</div>
                </div>
                <div className="row iva">
                    <div className="col-2">Iva 21%</div>
                    <div className="col-1 d-flex justify-content-end">{ivaCart.toFixed(2)} €</div>
                </div>


                <div className="row">
                    <div className="col-2">Envio</div>
                    <div className="col-1 d-flex justify-content-end">{shippingPrice.toFixed(2)} €</div>
                </div>
                <div className="row my-1">
                    <div className="col-2">Precio Total</div>
                    <div className="col-1 d-flex justify-content-end"><strong>{totalPrice.toFixed(2)} €</strong></div>
                </div>
                <div className="row my-2">
                    <Link className="btn btn-sm btn-block paidButton" to="/pedido">REALIZAR PEDIDO</Link>
                
                </div>
                </>
            )}
        </aside>
    )
}