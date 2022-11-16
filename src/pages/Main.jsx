import { Grid } from "@mui/material";
import React, {useEffect,useState } from 'react'
import {apiConnect} from "../api/Api";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard"


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
                        
                    <Grid container spacing={1} padding={1} className="w-100">
                        <div className="buttonsType mb-2 pb-2 w-100">
                            <button className="type1 col-xs-12 col-md-4 col-lg-2 m-1" onClick={()=> setFilterData(allData)}>TODAS LAS HERRAMIENTAS</button>

                            <button className=" type2 col-xs-12 col-md-4 col-lg-2 m-1" onClick={()=> filterResult("Perforación y Demolición")}>PERFORACIÓN Y DEMOLICIÓN</button>

                            <button className="type3 col-xs-12 col-md-4 col-lg-2 m-1" onClick={()=> filterResult("Fijación")}>HERRAMIENTAS DE IMPACTO</button>

                            <button className="type4 col-xs-12 col-md-4 col-lg-2 m-1" onClick={()=> filterResult("Herramientas madera")}>HERRAMIENTAS PARA MADERA</button>

                            <button className="type5 col-xs-12 col-md-4 col-lg-2 m-1" onClick={()=> filterResult("Herramientas metal")}>HERRAMIENTAS PARA METAL</button>

                        </div>
                    </Grid>
          






                <Grid container spacing={2} padding={2}>
                    {filterData.map((product) => {
                        
                        return (
                            
                                <Grid key={product.id} item xs={12} sm={6} md={4} lg={2}>
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
            <div className="container">
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