import '../styles/globals.css'
import 'antd/dist/antd.css';
import LayoutRender from './components/Layout';

function MyApp({ Component, pageProps }) {

  return <LayoutRender>
    <Component {...pageProps} />
    </LayoutRender>
}

export default MyApp
