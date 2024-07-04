import { Badge, Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import DataTable from '../../components/DataTable';
import { fetchPosts } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = () => {
 const dispatch = useDispatch();
 const posts = useSelector(state =>  state.posts);

 useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);

 
  return (
    <DataTable data={posts.data} />
  )
}

export default Dashboard;
