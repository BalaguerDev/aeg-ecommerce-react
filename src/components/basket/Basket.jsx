import accounting from "accounting";
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import './basket.css';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove, onDelete} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    /* const ivaPrice = items.price * 0.21; */
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block">
            
            {cartItems.length === 0 && <div>El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                
                <div key={item.id} className="row no-gutters align-items-center justify-content-between ">
                    <div className="col">
                        <span className="product-image media-middle">
                            <img src={item.img} alt={item.name} className="img-fluid" data-bs-toggle="modal" data-bs-target={"#product" + item.id} />
                        </span>
                    </div>
                    
                    <div className="col-7">
                        <div className="pb-1 ">
                            <p className="titleNameCard"data-bs-toggle="modal" data-bs-target={"#product" + item.id} >{item.title}</p>
                            <span className="text-muted">
                                {item.qty} x  
                            </span>
                            <span className="textPriceCard">
                                &nbsp;{accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                            </span>
                            <button onClick={() => onRemove(item)} className="col btn removeButton"><DoNotDisturbOnRoundedIcon/></button>
                            <button onClick={() => onAdd(item)} className="col btn addButton"><AddCircleRoundedIcon/></button>
                        </div>
                    </div>

                    
                        <button onClick={() => onDelete(item)} className="col deleteButton"><DeleteIcon/></button>
                        

                    <hr />
                   

                </div>
            ))}
            
            {cartItems.length !== 0 && (
                <>
                <div className="row my-1">
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
                <div className="row my-3">
                    <button className="paidButton btn btn-sm btn-block" onClick={() => alert("Proceder al pago")}>REALIZAR PEDIDO</button>
                </div>
                </>
            )}
        </aside>
    )
}