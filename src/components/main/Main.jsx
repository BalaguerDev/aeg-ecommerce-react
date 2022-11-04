import { Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard";




export default function Main(props) {
    const {cartItems, products, onAdd, onRemove} = props;

    return <div className=" block backg col-2">
        <h2>Productos</h2>
        <Grid container spacing={2} padding={2}>
                {
                    products.map(product => (
                        <Grid key ={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={product} item={cartItems.find((x) => x.id === product.id)} onAdd={onAdd} onRemove={onRemove}/>
                        </Grid>
                    ))
                }
            </Grid>
    </div>
}