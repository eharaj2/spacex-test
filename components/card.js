import styles from '../styles/Main.module.css'

const Card = ({spacex})=>{
	const {links, mission_name, flight_number, mission_id, launch_year, launch_success, launch_landing} = spacex || {};
	return (
			<div className={`${styles.col3}`}>
                              <div className={styles.card}>
                                <div>
                                  <img className={styles.img} src={links.mission_patch_small}/>
                                </div>
                                <div className={styles.card_body}>
                                    <div>
                                        <span className={styles.item_title}>{mission_name}#{flight_number}</span><br/>
                                        <b> Mission Ids:</b>
                                        {mission_id.map(el=>{
                                        	<li className={styles.li}> {el}</li>
                                        })}
                                        
                                    </div>
                                    <div>
                                      <b>Launch Year:</b> {launch_year}
                                    </div>
                                     <div>
                                      <b>Successfull Launch:</b> {launch_success?'true':'false'}
                                    </div>
                                     <div>
                                      <b>Successfull Landing:</b> {launch_landing?'true':'false'}
                                    </div>
                                </div>
                              </div>
             </div>
		)
}

export default Card;