import React, { useState } from "react";
import styled from "styled-components";
import logo from "./images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
 import {useSelector} from 'react-redux'
import { SelectCars } from "../features/Car/CarSlice";



const Header = () => {
  const cars = useSelector(SelectCars)
  const [nav, setNav] = useState(false)
  console.log(cars)

  
  return (
    <Container>
      <a href="Tesla.com">
        <img src={logo} alt="Tesla" />
      </a>
      <Menu>
        {cars&&cars.map((car,index)=> <a href="dem.com" key={index}>{car}</a>)}
      </Menu>
      <RightMenu>
        <a href="shop.com">Shop</a>
        <a href="account.com">Tesla Account</a>
        <CustomMenu onClick={()=>setNav(state=>!state)} />
      </RightMenu>
      <BurgerNav show={nav}>
        <CloseWrapper>
          <CustomClose onClick={()=>setNav(state=>!state)} color='red'/>
        </CloseWrapper >
        {cars&&cars.map((car,index)=>  <li key={index}> <a href="dem.com">{car}</a></li>)}
        <li><a href="d">Existing Inventory</a></li>
        <li><a href="d">Used Inventory</a></li>
        <li><a href="d">Trade-in</a></li>
        <li><a href="d">Cybertruck</a></li>
        <li><a href="d">Roadaster</a></li>
        <li><a href="d">Semi</a></li>
        <li><a href="d">Existing Inventory</a></li>
        <li><a href="d">Dashboard</a></li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  // width:100vw;
   top:0;
   left:0;
   right:0;
   z-index:1;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex:1;

  a {
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
  }

  @media (max-width:768px){
    display:none;
  }
`;

const RightMenu = styled.div`
  display:flex;
  align-items:center;
a {
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap:no-wrap;
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`


const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
display:flex;
padding:20px;
flex-direction:column;
text-align:start;
z-index:2;
list-style:none;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition:transform 0.25s ease-in-out;

li {
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}

a {
  font-weight:600;
}

svg:hover{
  color:red;
}

`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`