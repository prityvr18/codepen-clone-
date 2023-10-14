import { AppBar, Toolbar, styled } from "@mui/material";



const Container = styled(AppBar)`

background : #060606;
height: 9vh

`
const Header = () =>{

    const logo = 'https://tse4.mm.bing.net/th?id=OIP.MeHy0e0_nwQ9NMwBCGXTxgHaHa&pid=Api&P=0&h=180'
    return (
       <Container position="static">
        <Toolbar>
         <img src={logo} alt="logo" style={{width: 40}} />
        </Toolbar>
       </Container>
    )
} 
export default Header;