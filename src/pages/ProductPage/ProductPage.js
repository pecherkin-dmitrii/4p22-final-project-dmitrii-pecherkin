import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PRODUCTS_URL} from "../../urls";

function ProductPage() {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${PRODUCTS_URL}/${productId}`)
            .then(response => response.json()
                .then(product => setProduct(product)))
    }, [productId])

    return (
        <>
            <ProductInfo item={product}/>
        </>
    );
}

export default ProductPage;