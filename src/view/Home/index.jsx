import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Quantity from '../../components/Quantity'
import Campaign from '../../components/Campaign'
import People from '../../components/People'
import Help from '../../components/Help'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
           <Navbar /> 
           <Header /> 
           <Campaign /> 
           <Quantity /> 
           <People /> 
           <Help /> 
           <Footer /> 
        </>
    )
}