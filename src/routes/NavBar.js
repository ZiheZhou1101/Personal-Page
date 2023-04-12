import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import tiger from '../img/tiger.png'

const StyledBody = styled.div`
width: 100vw;
height:100vh;
background-color:#313636;
`
const StyledTop = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
`
const StyledLogoName = styled.div`
display:flex;
margin: 40px;
`
const StyledImg = styled.img`
width: 50px;
height: 50px;
vertical-align: middle;
border-radius: 25px;
`
const StyledNaveLink = styled(Link)`
padding-left: 25px;
text-decoration: none;
font-size: xx-large;
color:#f2ebd9;
`
const StyledNavBox = styled.div`
padding-right: 40px;
color: #f2ebd9;
`
const StyledNav = styled(Link)`
color: #f2ebd9;
font-size:x-large;
text-decoration: none;
margin: 15px;
`

const NavBar = () => {
    return (
        <StyledBody>
            <StyledTop>
                <StyledLogoName>
                    <div>
                        <Link to={''}>
                            <StyledImg src={tiger} alt='' />
                        </Link>
                    </div>
                    <span>
                        <StyledNaveLink to={''}>Zihe Zhou</StyledNaveLink>
                    </span>
                </StyledLogoName>
                <StyledNavBox>
                    <StyledNav key={'Resume'} to={'Resume'}>Resume</StyledNav>
                    <span>|</span>
                    <StyledNav key={'Project'} to={'Project'}>Project</StyledNav>
                    <span>|</span>
                    <StyledNav key={'Contact'} to={'Contact'}>Contact</StyledNav>
                </StyledNavBox>
            </StyledTop>
            <div>
                <Outlet />
            </div>
        </StyledBody>
    )
}
export default NavBar