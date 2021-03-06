import styles from '../styles/Main.module.css'
import Link from "next/link";
import {useState} from 'react';
const sidebar = ({Query})=>{

	const urlQuery = Query;
	const year = [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014, 2015, 2016, 2017,2018,2019,2020];

	const getYear = (y, n)=>{
		return <div key={y} className={styles.col12}>
				 <Link  href={{pathname: '/', query:{...urlQuery, launch_year:y}}}>	
	               <a className={styles.a_text}>{y}</a> 
	             </Link>
	             <Link  href={{pathname: '/', query:{...urlQuery, launch_year:n}}}>
	               <a className={styles.a_text}>{n}</a>
	             </Link>
	             </div>
	}

	return (
			 <div className={`${styles.row} ${styles.bg}`}>
	                        <div className={styles.col6}>
	                          <b>Filters</b>
	                        </div>
	                        <div className={styles.col12}>
	                         
	                           <div className={styles.row}>
	                            <div className={styles.col12}>
	                                <span className={styles.span_text}>Launch Year</span>
	                                <hr/>
	                              </div> 
	                              {
	                              	year.map((y, i)=>{
	                              		if(i % 2 != 0)
	                              			return getYear(y, y+1);
	                              		else
	                              			return
	                              	})
	                              }
	                            
	                            
	                           
	                           </div>
	                           
	                            <div className={styles.row}>
	                              <div className={styles.col12}>
	                                <span className={styles.span_text}>Successfull Launch</span>
	                                <hr/>
	                              </div>
	                              <div className={styles.col12}>
	                               <Link  href={{pathname: '/', query:{...urlQuery, launch_success:true}}}>
	                                <a className={styles.a_text}>True</a>
	                               </Link> 
	                               <Link  href={{pathname: '/', query:{...urlQuery, launch_success:false}}}>
	                                <a className={styles.a_text} href={'?launch_success=false'}>False</a>
	                              	</Link>
	                              </div>
	                            </div>
	                            <div className={styles.row}>
	                              <div className={styles.col12}>
	                                <span className={styles.span_text}>Successfull Landing</span>
	                                <hr/>
	                              </div>
	                              <div className={styles.col12}>
	                              <Link  href={{pathname: '/', query:{...urlQuery, land_success:true}}}>
	                                <a className={styles.a_text}>True</a> 
	                               </Link>
	                               <Link  href={{pathname: '/', query:{...urlQuery, land_success:false}}}>
	                                	<a className={styles.a_text}>False</a>
	                              	</Link>
	                              </div>
	                            </div>

	                        </div>
                 </div>
		)
}

export default sidebar;