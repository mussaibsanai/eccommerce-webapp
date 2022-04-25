import React, { useEffect, useState } from "react";
import "../../Styles/style.css";
import "../../Styles/responsive.css";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Action/cartActions";

function ProductListing() {
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [temp, setTemp] = useState(false);
  const [productSelected, setProductSelected] = useState({
    id : null,
    size : "",
  });

  const products = useSelector(state => state.items);
  const caritems = useSelector(state => state.addedItems);
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: "center",
    margin: 8,
    padding: 7,
    color: theme.palette.text.secondary,
  }));
  const theme = createTheme();
 

console.log("item", products);
console.log("Cartt item", caritems);

const validate  = (product, selected) => {


  if(!selected){
    toast.warning("Please select size first");
    return;
    
  }else if(product.id !== productSelected.id){
    toast.warning("Please select size first");
    return;
  }else {
    handleCart(product);
    setTemp(false)
  }

  setTemp(false)
}


const handleCart = (prodItem) => {
  console.log("ascj", prodItem);
  let itemtoCart;
  let existed_item= caritems.find(item=> prodItem.id === item.id && productSelected.size == item.SelectedSize);
  if(existed_item){
    itemtoCart = {
      "id": prodItem.id,
      "SelectedSize" : productSelected.size,
      "ProductName" : prodItem.title,
      "Price" : prodItem.price,
      "quantity" : existed_item.quantity += 1
    }

  }else{
    itemtoCart = {
      "id": prodItem.id,
      "SelectedSize" : productSelected.size,
      "ProductName" : prodItem.title,
      "Price" : prodItem.price,
      "quantity" : 1
    }
  }
  console.log("Existinggg", existed_item);
  dispatch(addToCart(itemtoCart));
  setProductSelected({
    id : null,
    size : "",
  });
}

 

  return (
    <div className="productListing">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <Grid container component="main" >
          <Box sx={{ flexGrow: 1, padding: 10 }}>
            <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }}>
              {products.map((itemm, index) => (
                <Grid key={index} >
                 <Item>
                    <img src={itemm.imageURL} alt="Dakar Product" />
                    <h1>{itemm.title}</h1>
                    {itemm.availableSizes.map((vall, indexx) => {
                      return (
                        <Button
                          style={{ margin: 10 }}
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                          setTemp(true);
                          setProductSelected({
                            id : itemm.id,
                            size : vall,
                          });
                          }}
                        >
                          {vall}
                        </Button>
                      );
                    })}
                    <p className="price">{itemm.price}</p>
                    <p>{itemm.description}</p>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        if (itemm.isActive) {
                          console.log("Product Added to Cart");
                          validate(itemm, temp)
                        } else {
                          toast.error("Sorry! Product is out of stock");
                        }
                      }}
                    >
                      Add To Cart
                    </Button>
                    </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid
            item
            xs={8}
            sm={6}
            md={4}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 8,
                alignItems: "center",
              }}
            >
             
              
              <Box component="form" >
              
             {caritems.map((citem, index) => {
              return(
                <Box>
                <Grid container spacing={1}>
                  <Grid container  spacing={1}>
                    <Grid item xs={4}>
                      <Item>{citem.ProductName}</Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>{citem.SelectedSize}</Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>{citem.Price} {"x"} {(citem.quantity)}</Item>
                    </Grid>

                   
                  </Grid>
                </Grid>
              </Box>
              ) 
             })}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Pay Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* {prouductListing.map((itemm, inde) => {
        return (
          <>
          <div className="product-card">
            <img src={itemm.imageURL} alt="Dakar Product" />
            <h1>{itemm.title}</h1>
            <p className="price">{itemm.price}</p>
            <p>{itemm.description}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (itemm.isActive) {
                  console.log("Product Added to Cart");
                } else {
                  toast.error("Sorry! Product is out of stock");
                }
              }}
            >
              Add To Cart
            </Button>
          </div>
          </>
        );
      })} */}
      </ThemeProvider>
    </div>
  );
}

export default ProductListing;
