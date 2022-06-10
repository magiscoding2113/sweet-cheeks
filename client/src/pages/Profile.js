import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../util/queries';


function Profile() {
  const params  = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: params
  });
  console.log(loading);
  console.log(data);
if(error) {
  console.log(error);




}
return (
  <>
 {
 
 loading ? <> "loading" </>: 
   <div>
   <h1>{data.age}</h1>
   {/* <h3>{data.post.description}</h3> */}
   </div>
 }
 </>
 )



}

export default Profile;