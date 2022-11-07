import accounting from "accounting";
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import './basket.css';

export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    /* const ivaPrice = items.price * 0.21; */
    const shippingPrice = itemsPrice > 500 ? 0 : 12;
    const totalPrice = itemsPrice + shippingPrice;

    return (
 
        <aside className="block">
            <div>
            {cartItems.length === 0 && <div>El carrito esta vacio</div>}
            {cartItems.map ((item) =>(
                <div key={item.id} className="row cardCart d-flex align-items-center justify-content-around">
                    <div className="col-1 infoProduct"data-bs-toggle="modal" data-bs-target={"#product" + item.id}> {item.title} </div>
                    <div className="col-1 d-flex justify-content-center">
                        <button onClick={() => onRemove(item)} className="btn removeButton"><DoNotDisturbOnRoundedIcon/></button>
                        <button onClick={() => onAdd(item)} className="btn addButton"><AddCircleRoundedIcon/></button>
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        {item.qty} x {accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                        <DeleteIcon className="deleteButton"/>
                    </div>


                </div>
            ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <hr/>
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