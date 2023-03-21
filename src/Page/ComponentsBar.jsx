import React from 'react'
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import { dragDataAction } from '../redux/reducer1/action';
import { editDataAction } from './../redux/reducer1/action';
import { useNavigate } from 'react-router-dom';

const ComponentsBar = ({componentList, updateDragData, updateEditData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className='componet_bar'>
      <div className='componet_bar_header'>
      <h3 className='heading'>Componets</h3>
      </div>
      <div className='componet_bar_scroll_section'>
      {componentList.map((data,i)=>
        <div className='component_icon' key={data.id} draggable={true} onDragEnd={(e)=>{dispatch(dragDataAction({}))}} onDragStart={(e)=>{
          // updateEditData("");
          dispatch(editDataAction({}));
        // updateDragData({type:data.component,flag:false,index:-1,css:"box draggable"});
        dispatch(dragDataAction({type:data.component,flag:false,index:-1,css:{},cssRaw:{}}));
      }}>{data.component}</div>
      )}
      </div>
      <div className='preview_btn' onClick={()=>{dispatch(editDataAction({}));navigate('/preview')}}>Preview</div>
    </div>
  )
}

export default ComponentsBar
