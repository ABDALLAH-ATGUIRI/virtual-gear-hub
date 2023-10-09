import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../utils/api/axios";
import { AuthContext } from "./Auth";
import Swal from "sweetalert2";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const { auth } = useContext(AuthContext);

  const fetchAllProducts = async () => {
    await instance.get(`/products?page=${currentPage}`).then(({ data }) => {
      setProducts(data);
    });
  };

  const fetchAllCategories = async () => {
    await instance.get('/categories').then(({ data }) => {
      setCategories(data)
    })
  };

  const fetchMyProducts = async () => {
    await instance.get(`/products/user-products?page=${currentPage}`).then(({ data }) => {
      setProducts(data)
    })
  };

  const addProduct = async (newProduct) => {
    await instance.post(`/products`, newProduct, {
      headers: { Authorization: `Bearer ${auth.token}`, "Content-Type": "multipart/form-data" }
    }).then(() => {
      fetchMyProducts()
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateProduct = async (form) => {
    await instance.post(`/products/${form.id}`, form, {
      headers: { Authorization: `Bearer ${auth.oken}`, ContentType: 'multipart/form-data' },
      _methode: 'PUT'
    }).then(({ data }) => {
      setProducts(data.products);
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteProduct = async (productId) => {
    await instance.delete(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${auth.token}` }
    }).then(() => {
      setProducts(products.filter(p => p.id !== productId))
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
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
    fetchAllCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        currentPage,
        setCurrentPage,
        addProduct,
        updateProduct,
        deleteProduct,
        searchProducts,
        fetchMyProducts,
        fetchAllProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
