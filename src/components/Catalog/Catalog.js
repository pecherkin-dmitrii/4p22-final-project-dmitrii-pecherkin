import styled from "styled-components";
import {useEffect, useState} from "react";
import CatalogCard from "../common/CatalogCard/CatalogCard";
import {CURRENCY, StyledContainer, WHITE_COLOR} from "../common/CommonStyles";
import {PRODUCTS_URL} from "../../urls";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../store/productsSlice";
import SearchInput from "../common/SearchInput/SearchInput";
import CategorySelect from "../common/CategorySelect/CategorySelect";

const ALL_CATEGORIES_LABEL = "Все категории";

const StyledCatalogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: "Roboto", sans-serif;
`;

const StyledSearchWrapper = styled.div`
  height: 100px;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 699px) {
    flex-direction: column;
  }
`;

function Catalog() {
    const [searchText, setSearchText] = useState("");
    const [categories, setCategories] = useState([]);
    const [searchCategory, setSearchCategory] = useState("");

    const products = useSelector(store => store.products);

    const dispatch = useDispatch();

    const handleSearchChange = (event) => setSearchText(event.target.value);
    const handleCategoryChange = (event) => setSearchCategory(event.target.value);

    const filterBySearchText = (product) => {
        if (searchText !== "") {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
        } else {
            return true
        }
    };

    const filterByCategory = (product) => {
        if (searchCategory !== "" && searchCategory !== ALL_CATEGORIES_LABEL) {
            return product.category === searchCategory
        } else {
            return true
        }
    };

    useEffect(() => {
        fetch(PRODUCTS_URL)
            .then(response => response.json()
                .then(productsArray => {
                    dispatch(addProducts(productsArray));
                    const tempSet = new Set();
                    tempSet.add(ALL_CATEGORIES_LABEL);
                    productsArray.forEach(product => tempSet.add(product.category))
                    setCategories(Array.from(tempSet));
                }))
    }, [])

    return (
        <>
            <StyledContainer>
                <StyledSearchWrapper>
                    <CategorySelect name="categories" areaLabel="Категории" options={categories} onChange={handleCategoryChange}/>
                    <SearchInput areaLabel="Поиск" placeholder="Поиск..." onChange={handleSearchChange}/>
                </StyledSearchWrapper>
            </StyledContainer>
            <StyledContainer>
                <StyledCatalogWrapper>
                    {
                        products
                            .filter(filterByCategory)
                            .filter(filterBySearchText)
                            .map(product => {
                                return <CatalogCard key={product.id}
                                                    id={product.id}
                                                    category={product.category}
                                                    description={product.description}
                                                    imageSrc={product.image}
                                                    price={product.price + CURRENCY}
                                                    title={product.title}
                                />
                            })
                    }
                </StyledCatalogWrapper>
            </StyledContainer>
        </>
    );
}

export default Catalog;