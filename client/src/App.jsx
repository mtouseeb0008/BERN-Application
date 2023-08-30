import './App.css'
import React , { useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import Wallet from './components/Wallet';
import ViewAllTasks from './components/ViewAllTasks';
import UpdateTask from './components/UpdateTask';
import ViewTask from './components/ViewTask';
import DeleteTask from './components/DeleteTask';

function App() {

  const [ state, setState] = useState({web3:null , contract:null , account:null})

  const saveState =({web3,contract, account})=>{
    setState({web3:web3 ,contract:contract ,account:account})
  }
  
  const router =createBrowserRouter([
    {path:'/' , element:<Wallet saveState={saveState}/>},
    {path:'/view-all-tasks' , element:<ViewAllTasks/>},
    {path:'/create-task' , element:<CreateTask state={state}/>},
    {path:'/view-task' , element:<ViewTask/>},
    {path:'/update-task' , element:<UpdateTask state={state}/>},
    {path:'/delete-task' , element:<DeleteTask state={state}/>}
  ])

  

  return (
    <>
    <RouterProvider router ={router}/>
        
        
    </>
  )
}

export default App
