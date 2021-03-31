import styled from "styled-components";
import variables from '../../../data/variables';

export const NavbarLogo = styled.div`
  a {
    color: ${variables.black};
    font-size: 2.3rem;
    font-family: "GT-Walsheim-Pro-Bold";
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const CenteredElemtent = styled.div`
position: absolute;
top: 38%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
z-index: 5;
font-size: 18px;
color: #ffffff;
`

export const HeartButton = styled.div`
  position: relative;
  width: 100px;
  height: 90px;
  float: left;
:before,
:after{
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: #fc2e5a;
  -moz-border-radius: 50px 50px 0 0;
  border-radius: 50px 50px 0 0;
  -webkit-transform: rotate(-45deg);
     -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
       -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 0 100%;
     -moz-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
       -o-transform-origin: 0 100%;
          transform-origin: 0 100%;
}
:after{
  left: 0;
  -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
     -moz-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
       -o-transform-origin: 100% 100%;
          transform-origin :100% 100%;
}
:hover {

}
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  > li a {
    font-size: 1.2rem;
    color: #232323;
    padding: .5rem .2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span, 
    svg {
      display: block;
      vertical-align: middle;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`

