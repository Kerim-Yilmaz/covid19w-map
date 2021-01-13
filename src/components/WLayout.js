import {Layout} from 'antd'
import XHeader from './XHeader';
import XContent from './XContent';
import XFooter from './XFooter';
import Covid19DataProvider from './context/Covid19';



const WLayout = () => {
    return (
       <>
        <Layout className='layout' >
            <XHeader/>
            <Covid19DataProvider>
                <XContent/>
            </Covid19DataProvider>
            <XFooter/>
        </Layout>
       </>
    )
}

export default WLayout
