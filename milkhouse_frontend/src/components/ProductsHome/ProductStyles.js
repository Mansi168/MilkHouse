import styled from "styled-components";

export const ProductsContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background: ${(props) => (props.active ? "#28a745" : "#ddd")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductCard = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SaleTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  margin-top: 10px;
`;

export const ProductName = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #333;
  span {
    text-decoration: line-through;
    color: #888;
    margin-left: 5px;
  }
`;

export const Discount = styled.span`
  color: green;
  font-weight: bold;
  margin-left: 5px;
`;

export const AddToCartButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
`;
