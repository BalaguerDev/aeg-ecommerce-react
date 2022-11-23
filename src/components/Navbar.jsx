
import '../app.css';
import { Link } from 'react-router-dom';
import Basket from "./Basket";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PhoneIcon from '@mui/icons-material/Phone';
import AppsIcon from '@mui/icons-material/Apps';
import DiscountIcon from '@mui/icons-material/Discount';
import MenuIcon from '@mui/icons-material/Menu';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Login from './Login';
import Register from './Register';
import AddUser from "../api/AddUsers"
import { Navigate } from 'react-router-dom';


export default function Navbar(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const { countCartItems } = props;

  return (
    <>
      <header className="fixed-top">
        <div className="p-3 text-center border-bottom navBar">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Link to="/" className="ms-md-2"><img src="assets/logo-AEG.png" height="35" alt="logoAEG" /></Link>
              </div>



              {/* SEARCH BAR */}
              <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                  <input type="search" className="form-control rounded" placeholder="Search" />

                </form>
              </div>



              {/* CART ICON */}
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <button className="btn btnCartUser" type="" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <ShoppingCartIcon className="text-white" />
                  {countCartItems ? (
                    <Badge badgeContent={countCartItems} color="success">

                    </Badge>) : ("")}
                </button>
                <ul className="dropdown-menu">
                  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
                </ul>



                {/* /REGISTER / LOGIN / USER PROFILE  */}


                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><HowToRegIcon fontSize='small' />Inicio sesión</a>
                <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div className="offcanvas-header">
                    <div id="sidenav-1" className="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
                      <ul className="sidenav-menu">
                        <li className="sidenav-item">
                          <div>
                            <Login />
                          </div>
                          {/* sideBar GRUPO TTI */}
                          <li className="sidenav-item my-3">
                            <a className="sidenav-link titleSideNav mb-5" data-bs-toggle="collapse" href="#collapseGroup" role="button" aria-expanded="false" aria-controls="collapseExample">No tienes cuenta Registrate</a>
                            <div className="collapse mt-3" id="collapseGroup">
                              <div><Register className="mt-2" /></div>
                            </div>
                            <hr className="mt-5 mb-5" />
                          </li>

                        </li>


                        {/* OFERTA DEL MES */}
                        <li className="sidenav-item my-3">
                          <p className="sidenav-link titleSideNav" ><DiscountIcon />&nbsp;&nbsp; OFERTA DEL MES</p>
                          <div className="card mx-3 my-4">
                            <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                              <img src="https://res.cloudinary.com/drghk9p6q/image/upload/v1668073630/product-img/BSB_18BLLI-602C_kdqqwq.jpg" alt="productOffer"
                                className="w-100" />
                              <a href="#!">
                                <div className="mask">
                                  <div className="d-flex justify-content-start align-items-end h-100">
                                    <h5><span className="badge bg-danger ms-2">-20%</span></h5>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="card-body">
                              <a href="/#" className="text-center">
                                <p className="mb-2">Taladro de percusión sin escobillas de 18V</p>
                              </a>
                              <p className="mb-0">
                                <s>439.00€</s><strong className="ms-2 text-danger">349.00€</strong>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/*  Modal WISHLIST */}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h1 className="modal-title fs-5" id="exampleModalLabel">MI LISTA DE DESEOS</h1>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navBar">

          <div className="container justify-content-center justify-content-md-between">

            <ul className="navbar-nav flex-row">


              <li className="nav-item me-2 me-lg-0">
                <a className="nav-link"><MenuIcon />&nbsp;Productos</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block menuItem">
                <a className="nav-link" href="#/">Gremio</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block menuItem">
                <a className="nav-link" href="#/">Tecnologia</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#/">Servicio</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#/">Sobre AEG</a>
              </li>
            </ul>

            <a href="src\assets\FolletoNavidadAEG.pdf" className="btn btn-sm btn-outline-dark" download>Descargar Folleto <DownloadIcon /></a>

          </div>

        </nav>







      </header>
    </>
  )
}