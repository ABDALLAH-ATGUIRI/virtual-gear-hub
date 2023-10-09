import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../utils/api/axios";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { auth } = useProductContext();


  const FetchAllProducts = async () => {
    await instance.get("/products").then(({ data }) => {
      setProducts(data.products);
    });
  };

  const FetchAllCategories = async () => {
    await instance.get('/categories').then((response) => {
      setCategories(response.data)
    })
  };

  const addProduct = async (newProduct) => {
    await instance.post(`/products`, newProduct, {
      headers: { Authorization: `Bearer ${auth.token}` }
    }).then(({ data }) => {
      setProducts(data.products);
    })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateProduct = async (productId, updatedProduct) => {
    await instance.post(`/products/${productId}`, updatedProduct, {
      headers: { Authorization: `Bearer ${auth.oken}` },
      _methode: 'PUT'
    }).then(({ data }) => {
      setProducts(data.products);
    })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteProduct = async (productId) => {
    await instance.delete(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${auth.token}` }
    }).then(({ data }) => {
      setProducts(data.products);
    })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchProducts = async (query) => {
    await instance.post("/products/search", query).then(({ data }) => {
      setProducts(data.products);
    })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    FetchAllProducts();
    FetchAllCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        addProduct,
        updateProduct,
        deleteProduct,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
