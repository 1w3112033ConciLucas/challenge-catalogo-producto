import { Grid, Button } from "@material-ui/core";
//import { Filter } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions";
import ProductCard from "../card/Card";

function ProductsCards() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  const cat = products.map((produ) => produ.category);
  const filter = new Set(cat);
  const show = [...filter];

    console.log("product", products)

  const [categories, setCategories] = useState([...products]);

  
  function removeDuplicates(originalArray, prop) {
      var newArray = [];
      var lookupObject = {};
      
      for (var i in originalArray) {
          lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    
    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
    console.log("categories: ", categories)
function filterCategories(name) {
  const categ = products.filter((p) => p.category === name);
  setCategories(categ);
}
  const result = removeDuplicates(categories, "id");

  console.log("result: ", result)
  console.log("categories: ", categories)
  
  //console.log("result: ", result)



  useEffect(() => {
    dispatch(getProducts());
    //setCategories([...products]);
  }, []);

  useEffect(() => {
    //dispatch(getProducts());
    setCategories([...products]);
  }, [products]);

  return (
    <Grid>
      <Grid container style={{ justifyContent: "center" }}>
        {!loading
          ? show?.map((cate) => {
              const c = cate;
              return (
                <Button
                  style={{
                    backgroundColor: "#FF0000",
                    color: "#FFF0F0",
                    marginLeft: "0.2rem",
                    marginTop: "0.3rem",
                  }}
                  name={cate}
                  onClick={() => filterCategories(c)}
                >
                  {cate}
                </Button>
              );
            })
          : null}
      </Grid>

      <Grid
        container
        style={{ justifyContent: "center", flexGrow: 1, padding: "0.2rem" }}
      >
        {!loading ? (
          result?.map((p) => { 
              console.log("ID ", p.id)
            return (
              <ProductCard
                key={p.id}
                createdAt={p.createdAt}
                title={p.title}
                category={p.category}
                description={p.description}
                tags={p.tags}
                image={p.image}
                link={p.link}
                id={p.id}
                style={{ padding: "0.3rem" }}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
      </Grid>
    </Grid>
  );
}

export default ProductsCards;
