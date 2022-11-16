import accounting from "accounting";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../app.css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";


export default function basket(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const sinIva = itemsPrice * 0.79;
  const ivaCart = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 500 ? 0 : 12;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <div className="min-vh-100">
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="display-6 fw-bolder text-center w-100">Finalizar su Pedido</h1>
            <p>Inicie sesión o registrese ➤ Completa los campos requeridos para procesar su compra ➤ Cualquier duda póngase en contacto al 935 322 901 (Lunes a Sábado de 7:00 a 17:00). </p>

            <hr />
          </div>
        </div>

        <div className="row mt-5 px-3">
          <div className="col-md-4 col-sm-12 col-xs-12 col-12"  >
            <div className="row">
              <div className="col-xs-12 col-12">
                <div className="row titleUser  d-flex justify-content-between align-items-center">
                  <h6 className="col"><PersonIcon />&nbsp; Tus datos</h6>
                  <button type="button" id="opc_show_login" className="col btn btn-sm btn-outline-dark btn-xs float-lg-right">
                    Iniciar Sesion
                  </button>
                  <hr className="my-3" />
                </div>
              </div>

            </div>
            <form action="" id="form_customer" className="validation">
              <div className="row">
                {/* Form Email */}
                <input className="form-control form-control-sm my-2" type="text" placeholder="Nombre completo" aria-label="Email" />
              </div>
              <div className="row">
                {/* Form Name */}
                <input className="form-control form-control-sm my-2" type="text" placeholder="Email" aria-label="Email" />
              </div>

              <div className="d-flex justify-content-between my-3  border-top w-100 collapseInfoEnvio" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                <h6 className="pt-1">Información de Envio</h6>
                <ArrowCircleDownIcon className="pt-1" />
              </div>
              <div>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form DNI */}
                      <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                      {/* Form Company */}
                      <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="Email" />
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      {/* Form Street */}
                      <input className="form-control form-control-sm my-1" type="text" placeholder="Dirección" aria-label="Email" />
                    </div>
                  </div>

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form Country */}
                      <input className="form-control form-control-sm" type="text" placeholder="País" aria-label="DNI" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form ZipCode */}
                      <input className="form-control form-control-sm" type="number" placeholder="Codigo Postal" aria-label="ZipCode" />
                    </div>
                  </div>

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">
                      {/* Form DNI */}
                      <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">
                      {/* Form Company */}
                      <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="company" />
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8 col-sm-12 col-xs-12 col-12  my-1 ml-5 carrito">
            <div className="row">
              <div className="col-xs-12 col-12">
                <div className="row titleUser  d-flex justify-content-between align-items-center">
                  <h6 className="col"><LocalShippingIcon />&nbsp; Tu carrito</h6>
                </div>


                <aside className="w-100 my-2 ">

                  <div className="scrollCheckout w-100">
                    {cartItems.length === 0 && <div>El carrito esta vacio</div>}
                    {cartItems.map((item) => (

                      <div key={item.id}>
                        <div className="row itemCheckout row align-items-center">
                          <div className="col">
                            <img src={item.img} alt={item.name} className="img-fluid" data-bs-toggle="modal" data-bs-target={"#product" + item.id} />
                          </div>

                          <div className="col-10">
                            <div className="col d-flex justify-content-between align-items-center">
                              <p className="titleNameCard my-2  w-75 " data-bs-toggle="modal" data-bs-target={"#product" + item.id} >{item.title}</p>
                              <DeleteOutlineIcon className=" deleteButton w-25" onClick={() => onDelete(item)} />
                            </div>

                            <div className="col d-flex justify-content-between align-items-center">
                              <div className="w-75">
                                <span className="col-6 text-muted ">{item.qty} x </span> &nbsp;{accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                              </div>

                              <div className="w-25 d-flex justify-content-around">
                                <RemoveCircleOutlineIcon className=" removeButton" onClick={() => onRemove(item)} />
                                <AddCircleOutlineIcon className=" addButton" onClick={() => onAdd(item)} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />

                      </div>

                    ))}
                  </div>
                  Plazo de entrega)))))))))))))))))))
                  Forma de envio ))))))))))))))))))))
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

                      <div className="d-grid gap-2 d-flex justify-content-between my-3">
                        <Link to="/"className="btn btn-outline-dark btn-sm w-50" type="button"><ArrowBackIosNewIcon sx={{fontSize:"medium"}}/>&nbsp;Seguir Comprando</Link>
                        <button className="btn btn-dark btn-sm w-50" type="button">Realizar Pago</button>
                      </div>
                    </>
                  )}
                </aside>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )

}