import React from "react";
import {
  ProductsContainer,
  ProductsWrapper,
  ProductCard,
  ProductImage,
  SaleTag,
  ProductInfo,
  ProductName,
  Price,
  Discount,
  AddToCartButton,
  NavigationButton,
  TabsContainer,
  TabButton
} from "./ProductStyles";

const products = [
  {
    id: 1,
    name: "A2 Gir Cow Milk 1LTR",
    image: "/images/gir-cow-milk.png",
    price: 143,
    originalPrice: 160,
    discount: "11% off",
    rating: 3.4
  },
  {
    id: 2,
    name: "A2 Premium Cow Milk 1LTR",
    image: "/images/premium-cow-milk.png",
    price: 199,
    originalPrice: 240,
    discount: "17% off",
    rating: 4.0
  },
  {
    id: 3,
    name: "A2 Infant Milk (Shishu Milk) 1LTR",
    image: "/images/infant-milk.png",
    price: 199,
    originalPrice: 249,
    discount: "20% off",
    rating: 4.5
  },
  {
    id: 4,
    name: "A2 Gir Cow Ghee 200ML",
    image: "/images/gir-cow-ghee.png",
    price: 550,
    originalPrice: 579,
    discount: "5% off",
    rating: 4.62
  }
];

const Products = () => {
  return (
    <ProductsContainer>
      <h2>Products</h2>

      <TabsContainer>
        <TabButton active>Popular</TabButton>
        <TabButton>Best Seller</TabButton>
      </TabsContainer>

      <ProductsWrapper>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <SaleTag>Sale</SaleTag>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <Price>
                ₹{product.price} <span>₹{product.originalPrice}</span>{" "}
                <Discount>{product.discount}</Discount>
              </Price>
              <AddToCartButton>Add to cart</AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>

      <NavigationButton left>&lt;</NavigationButton>
      <NavigationButton right>&gt;</NavigationButton>
    </ProductsContainer>
  );
};

export default Products;
