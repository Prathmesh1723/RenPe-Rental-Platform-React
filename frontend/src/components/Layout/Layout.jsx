import {Box} from '@chakra-ui/react';
import { HeadProvider } from 'react-head';
import Navbar from "../navbar/navbar";
import Footer from '../footer/footer';


const Layout = ({ children }) => (
    <>
    <HeadProvider>
        <title>Real Estate</title>
    </HeadProvider>
    <Box maxWidth="1280px" m="auto">
        <Navbar/>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
    </Box>
    </>
)

export default Layout;