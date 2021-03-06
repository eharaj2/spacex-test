import styles from '../styles/Main.module.css'
import Card from './card';
const List = ({AllSpacex})=>{
	return (

			<div className={styles.row } >
                 {
                  AllSpacex.map((spacex, i)=>{
                  if(spacex)
                  	return <Card key={i} {...{spacex}}/>
                  }) 
                }   	    
             </div>
		)
}

export default List;