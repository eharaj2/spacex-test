import axios from 'axios'
import {BASE_URL} from './constants'

export const getAllSpacex = async (query) => {
	var prm = '';
	if(query['launch_success'] !== undefined && query['land_success'] !== undefined && query['launch_year'] !== undefined)
		prm = "&launch_success="+query.launch_success+"&land_success="+query.land_success+"&launch_year"+query.launch_year;
	else if(query['launch_success'] !== undefined && query['land_success'] !== undefined)
		prm = "&launch_success="+query.launch_success+"&land_success="+query.land_success;
	else if(query['launch_success'] !== undefined && query['launch_year'] !== undefined)
		prm = "&launch_success="+query.launch_success+"&launch_year="+query.launch_year;
	else if(query['land_success'] !== undefined)
		prm = "&land_success="+query.land_success;
	else if(query['launch_success'] !== undefined)
		prm = "&launch_success="+query.launch_success;
	else if(query['launch_year'] !== undefined)
		prm = "&launch_year="+query.launch_year;

  const spacex = await axios.get(`${BASE_URL}/launches?limit=100`+prm)
  .then(({data}) => {
    return data
  })
  return spacex;
}