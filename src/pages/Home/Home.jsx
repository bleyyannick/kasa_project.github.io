
import styles from './Home.module.css'; 
import logo from '../../images/logo.png'
import landscape from '../../images/landscape_home.jpg'; 

import { Banner, ThumbList, Footer, Landscape } from '../../components';

const Home = () => {
  return (
  <>
    <div className={styles.container}>
      <Banner img={logo} />
      <Landscape img={landscape}></Landscape>
      <ThumbList></ThumbList>
    </div>
    <Footer logo={logo} text={"© 2020 Kasa. All rights reserved"}/>
  </>
  )
}

export default Home; 