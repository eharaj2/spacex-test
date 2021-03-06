import Head from 'next/head'
import styles from '../styles/Main.module.css'
import Sidebar from '../components/sidebar';
import List from '../components/list';
import {getAllSpacex} from '../lib/spacex';
export default function Home({AllSpacex, Query}) {

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <a className={styles.header_text} href=''>SpaceX Launch Programs</a>
        </div>
              <div className={styles.row}>
                  <div className={styles.col3}>
                     <Sidebar {...{Query}}/>
                  </div>
                  <div className={styles.col9}>
                          <List  {...{AllSpacex}} />
                  </div>
              </div>   
      
      </div>
  )  
}

 export const getServerSideProps = async(context)=>{
    const Query = context.query;
    const AllSpacex = await getAllSpacex(Query);
    
    return {
    props: {
      AllSpacex,
      Query
        }
      }
  }
