import React from 'react';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
  console.log("YOUR CONTEXT", context.query)
  const {query} = context;
  try{
    const response = await fetch('http://localhost:3000/api/user/' + query.username );
    const data = await response.json();
    return {
      props: {
        data
      }
    }
  } catch(e){
    console.log("error!",e)
    return {
      props: {
        message: 'failure'
      }
    }
  }
}

const Post = (props) => {
  const router = useRouter();
  console.log(router.query, 'ROUTER QUERY');
  console.log('PROPS FROM API', props);
  return (
    <div>
      <h1>Welcome back: {props.data?.email}</h1>
    </div>
  );
};

export default Post;
