import { Grid } from "@mui/material";
import React, {useEffect,useState } from 'react'
import {apiConnect} from "../../../api/Api";
import Hero from "../../../components/hero/Hero";
import ProductCard from "../../../components/productCard/ProductCard"


export default function Main(props) {

    const {cartItems, onAdd, onRemove,} = props;
    const [filterData, setFilterData]= useState([]);            /* productos filtradors */
    const [allData, setAllData] = useState();                   /* TODOS LOS PRODUCTOS */
    const url = "http://localhost:3000/products";

    useEffect(()=>{
        const connection = async () => {
            const response = await apiConnect(url);
            setFilterData(prev => prev = response);
            setAllData(prev => prev = response);
        }
        connection()
    }, [url])

    

    const filterResult =(typeItem) => {
        const result = allData.filter((curData)=>{
            return curData.type===typeItem
        });
        setFilterData(result);
    }




    const ShowProducts = () => {
      
    
        return (
            <>
                <div className="buttonsType d-flex justify-content-around mb-5 pb-5">
                    <button className="me-2 type1" onClick={()=> setFilterData(allData)}>TODAS LAS HERRAMIENTAS</button>

                    <button className="me-2 type2" onClick={()=> filterResult("Perforación y Demolición")}>PERFORACIÓN Y DEMOLICIÓN</button>

                    <button className="me-2 type3" onClick={()=> filterResult("Fijación")}>HERRAMIENTAS DE IMPACTO</button>

                    <button className="me-2 type4" onClick={()=> filterResult("Herramientas madera")}>HERRAMIENTAS PARA MADERA</button>

                    <button className="me-2 type5" onClick={()=> filterResult("Herramientas metal")}>HERRAMIENTAS PARA METAL</button>

                </div>

                <Grid container spacing={2} padding={2}>
                    {filterData.map((product) => {
                        
                        return (
                            
                                <Grid key={product.id} item xs={6} sm={4} md={3} lg={2}>
                                    <ProductCard product={product} item={cartItems.find((x) => x.id === product.id)} onAdd={onAdd} onRemove={onRemove}/>
                                </Grid>
                            
                        )
                    })}
                </Grid>
            </>

        );
    };

    return (
        <>
        <div>
            <Hero/>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center mt-5 pt-5">Últimos productos</h1>
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