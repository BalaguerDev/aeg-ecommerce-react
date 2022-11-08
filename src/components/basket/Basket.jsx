import accounting from "accounting";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import './basket.css';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove, onDelete} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    /* const ivaPrice = items.price * 0.21; */
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block">
            <h2>ProductCart</h2>
            <div className="scrollElement">
            {cartItems.length === 0 && <div>El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                
                    <div key={item.id} className="itemDivCart row align-items-center justify-content-between">
                        <div className="col">
                            <span className="product-image media-middle">
                                <img src={item.img} alt={item.name} className="img-fluid" data-bs-toggle="modal" data-bs-target={"#product" + item.id} />
                            </span>
                        </div>
                        
                        <div className="col-8 d-flex">
                            <div className="pb-2">
                                <p className="titleNameCard"data-bs-toggle="modal" data-bs-target={"#product" + item.id} >{item.title}</p>

                                <div className="row textPriceCard d-flex align-items-center">
                                    <div className="col-8">
                                        <span className="text-muted">{item.qty} x </span> &nbsp;{accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                                    </div>
                                    <div className="col-4 d-flex ">
                                        <button onClick={() => onRemove(item)} className="btn removeButton mx-0 "><RemoveCircleOutlineIcon className="removeButton"/></button>
                                        <button onClick={() => onAdd(item)} className="btn addButton mx-0 "><AddCircleOutlineIcon className="addButton"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-end">
                            <button onClick={() => onDelete(item)} className="deleteButton"><ClearIcon/></button>
                        </div>    

                        <hr />
                    

                    </div>
                
            ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <div className="row mt-3">
                    <div className="col-2">Precio</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)} €</div>
                </div>
                <div className="row my-1">
                    <div className="col-2">Envio</div>
                    <div className="col-1 text-right">{shippingPrice.toFixed(2)} €</div>
                </div>
                <div className="row my-1">
                    <div className="col-2">Precio Total</div>
                    <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)} €</strong></div>
                </div>
                <div className="row my-2">
                    <button className="paidButton btn btn-sm btn-block" onClick={() => alert("Proceder al pago")}>REALIZAR PEDIDO</button>
                </div>
                </>
            )}
        </aside>
    )
}