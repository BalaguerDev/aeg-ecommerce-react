import { Grid } from "@mui/material";

import ProductCard from "../productCard/ProductCard";
import dataProduct from "../../assets/db/db"
import { useState } from "react";



export default function Main(props) {

    const {cartItems, onAdd, onRemove, onDelete} = props;
    const {products} = dataProduct;
    const [data,setData]=useState(dataProduct);

    const filterResult =(typeItem) => {
        const result = dataProduct.filter((curData)=>{
            return curData.type===typeItem
        });
        setData(result);
    }




    const ShowProducts = () => {
      
    
        return (
            <>
                <div className="buttonsType d-flex justify-content-around mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 type2" onClick={()=> setData(dataProduct)}>TODAS LAS HERRAMIENTAS</button>
                    <button className="btn btn-outline-dark me-2 type1" onClick={()=> filterResult("Perforación y Demolición")}>PERFORACIÓN Y DEMOLICIÓN</button>
                    <button className="btn btn-outline-dark me-2 type3" onClick={()=> filterResult("Fijación")}>HERRAMIENTAS DE IMPACTO</button>
                    <button className="btn btn-outline-dark me-2 type4" onClick={()=> filterResult("Herramientas madera")}>HERRAMIENTAS PARA MADERA</button>
                    <button className="btn btn-outline-dark me-2 type5" onClick={()=> filterResult("Herramientas metal")}>HERRAMIENTAS PARA METAL</button>
                </div>
                <Grid container spacing={2} padding={2}>
                    {data.map((product) => {
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
                   <ShowProducts />
                </div>
            </div>
        </div>
        </>
    )

}