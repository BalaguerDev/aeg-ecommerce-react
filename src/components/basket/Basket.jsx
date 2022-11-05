import {formatMoney} from "accounting";
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './basket.css';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((prev,current) => prev + current.qty * current.price, 0);
    /* const ivaPrice = item.price * 0.21 */; 
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block col-1">
 
            <div>
            {cartItems.length === 0 && <div className="text-center">El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                <div key={item.id} className="cardCart d-flex justify-content-between align-items-center">
                    <div className="div1Left">
                        <a href="#/" className="nameCart" data-bs-toggle="modal" data-bs-target={"#product" + item.id}>{item.title}</a>
                    </div>

                    <div> 
                        <button onClick={() => onRemove(item)} className="btn btn-sm absButton"><DoNotDisturbOnRoundedIcon/></button>
                        <button onClick={() => onAdd(item)} className="btn btn-sm addButton"><AddCircleRoundedIcon/></button>
                    </div>
                    <div>
                        {item.qty} x {formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                    </div>

                    {/* <a href="#/" className="col-1 nameCart" data-bs-toggle="modal" data-bs-target={"#product" + item.id}>{item.title}</a>
                    <div className="col-1">
                        <button onClick={() => onRemove(item)} className="btn btn-sm absButton"><DoNotDisturbOnRoundedIcon/></button>
                        <button onClick={() => onAdd(item)} className="btn btn-sm addButton"><AddCircleRoundedIcon/></button>
                    </div>
                    <div className="col-1 text-right">
                         {item.qty} x {formatMoney(item.price, { symbol: "€", format: "%v %s" })}  
                    </div> */}

                </div>
            ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <hr/>
                <div className="row">
                    <div className="col-2">Precio</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)} €</div>
                </div>
                <div className="row">
                    <div className="col-2">Envio</div>
                    <div className="col-1 text-right">{shippingPrice.toFixed(2)} €</div>
                </div>
                <div className="row">
                    <div className="col-2">Precio Total</div>
                    <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)} €</strong></div>
                </div>
                <hr/>
                <div className="row">
                    <button className="btn btn-lg btn-block btn-secondary" onClick={() => alert("Proceder al pago")}>Procedemos con la compra</button>
                </div>
                </>
            )}
        </aside>
    )
}