import accounting from "accounting";
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './basket.css';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    /* const ivaPrice = items.price * 0.21; */
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block col-1">
            <h2>Articulos Carrito</h2>
            <div>
            {cartItems.length === 0 && <div>El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                <div key={item.id} className="row cardCart">
                    <div className="col-1"data-bs-toggle="modal" data-bs-target={"#product" + item.id}> {item.title} </div>
                    <div className="col-1">
                        <button onClick={() => onRemove(item)} className="btn btn-sm absButton"><DoNotDisturbOnRoundedIcon/></button>
                        <button onClick={() => onAdd(item)} className="btn btn-sm addButton"><AddCircleRoundedIcon/></button>
                    </div>
                    <div className="col-1 text-right">
                        {item.qty} x {accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                    </div>

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