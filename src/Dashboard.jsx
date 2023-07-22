import React from 'react'
import ComponentsBar from './Page/ComponentsBar'
import SettingsBar from './Page/SettingsBar'
import UiDropScreen from './Page/UiDropScreen'
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import { deleteDataAction, dragDataAction, dropDataAction } from './redux/reducer1/action';
import { Header } from './Page/Header';
const componentList = [{id:'A',component:'input'},{id:'B',component:'carousel'},{id:'C',component:'textarea'},{id:'A',component:'input'},{id:'B',component:'carousel'},{id:'C',component:'textarea'},{id:'A',component:'input'},{id:'B',component:'carousel'},{id:'C',component:'textarea'},{id:'A',component:'input'},{id:'B',component:'carousel'},{id:'C',component:'textarea'}];
const Dashboard = () => {
    const dispatch = useDispatch();
    const dropData = useSelector(state => state.dropData);
    const dragData = useSelector(state => state.dragData)
    const deleteData = useSelector(state => state.deleteData)
  return (
   <>
   <Header/>
   <div className='dashboard'>
   <ComponentsBar componentList={componentList}/>
    <UiDropScreen triggerDelete={ (e)=>{dispatch(deleteDataAction(true));}}/>
    <SettingsBar/>
    {deleteData && <div className='popup_background'>
    <div className='popup'>
    <h3>Warning, this component will be permanently deleted!</h3>
    <div className='popup_button'>
    <button className='danger_btn' onClick={()=>{
      let tempArr = dropData;
      tempArr.splice(dragData.index,1);
      if(dragData)
       dispatch(dropDataAction([...tempArr]));
      dispatch(dragDataAction({}));
      dispatch(deleteDataAction(false));
    }}>YES</button>
    <button onClick={()=>{
      dispatch(dragDataAction({}));dispatch(deleteDataAction(false));
    }}>NO</button>
    </div>
</div>
  </div>}

  </div>
   </>
  )
}

export default Dashboard
