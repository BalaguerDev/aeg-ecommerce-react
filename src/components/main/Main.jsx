import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import dataProduct from "../../assets/db/db"
import accounting from "accounting";
import { AddShoppingCart } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Skeleton from "react-loading-skeleton";




export default function Main(props) {
    const { cartItems, products, onAdd, onRemove } = props;

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(dataProduct);
    const [loading, setLoading] = useState(false);
    let component = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await products.map(() => {
                if (component) {
                    setData(response);
                    setFilter(response);
                    setLoading(false);
                }

                return () => {
                    component = false;
                }
            });
            getProducts();
        }
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        );
    };

    const filterProduct = (cat) =>{
        const updatedList = products.filter((x) => x.type === cat);
        setFilter(updatedList);
    }
console.log(filter)

    const ShowProducts = () => {
      
    
        return (
            <>
                <div className="buttonsType d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(products)}>TODAS LAS HERRAMIENTAS</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("Perforación y Demolición")}>PERFORACIÓN Y DEMOLICIÓN</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("Fijación")}>FIJACIÓN</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("Herramientas madera")}>HERRAMIENTAS PARA MADERA</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("Herramientas metal")}>HERRAMIENTAS PARA METAL</button>
                </div>
                <Grid container spacing={2} padding={2}>
                    {products.map((product) => {
                        return (
                            <>
                                <Grid key ={product.id} item xs={12} sm={6} md={4} lg={3}>
                                    <ProductCard product={product} item={cartItems.find((x) => x.id === product.id)} onAdd={onAdd} onRemove={onRemove}/>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </>

        );
    };

    return (
        <>
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Últimos productos</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
        </>
    )

}