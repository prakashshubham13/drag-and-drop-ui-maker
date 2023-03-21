import React,{useState} from 'react'
import { ImBin } from 'react-icons/im';
import CustomInput from '../Custom Component/CustomInput';
import CustomTextarea from './../Custom Component/CustomTextarea';
import CustomCarousel from './../Custom Component/CustomCarousel';
import {useSelector, useDispatch} from 'react-redux';
import { editDataAction,dragDataAction,dropDataAction } from './../redux/reducer1/action';
import PreviewScreen from './PreviewScreen';
const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElements.reduce((closest, child ,i) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child, index: i};
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY });
}
const UiDropScreen = ({updateDropData,updateDragData,triggerDelete}) => {
  const dispatch = useDispatch();
  const dropData = useSelector(state => state.dropData);
  const dragData = useSelector(state => state.dragData);
  const editData = useSelector(state => state.editData);
    const [deletecss,updateDeletecss] = useState('delete');
    const [tab,updateTab] = useState(true);
    const [dropcss,updateDropcss] = useState('uidropscreen_scroll_section');
  return (
    <div className='mainscreen'>
    <div className='uidropscreen'>
    {!tab ?
    <div className={dropcss} id="editScreen"
    onDragOver={(event)=>{updateDropcss('uidropscreen_scroll_section drop_screen');
    event.stopPropagation();event.preventDefault();}} 
    onDragLeave={()=>{updateDropcss('uidropscreen_scroll_section');}}
    onDrop={(event)=>{updateDropcss('uidropscreen_scroll_section');
    const afterElement = getDragAfterElement(document.querySelector('.uidropscreen_scroll_section'),event.clientY);
    document.getElementById('editScreen').childNodes.forEach((data)=>{
      data.classList.remove('dragging');
    });
    
    let tempArr = dropData;
    let arr;
    if(afterElement.index !== undefined || dragData.flag){
      if(!dragData.flag)
      {
        tempArr.splice(afterElement.index,0,dragData);
      }
      else{
        tempArr.splice(dragData.index,1);
        tempArr.splice(afterElement.index === undefined?tempArr.length:afterElement.index,0,dragData);
      }
      arr = tempArr;
    }else{
        arr = [...tempArr,dragData];
    }
    dragData && 
    dispatch(dropDataAction([...arr]));
    dispatch(dragDataAction({}));
    // updateDropData([...arr]);
    // updateDragData("");

  }}
    >


    {dropData?.map((data,i)=>
      <div key={i+data} draggable={true} className='box draggable' 
      // style = {data.css}
      style={editData.index === i?{'border':'0.1rem solid #14a1ff'}:{}} 
      onDragStart={(e)=>{
        // updateEditData("");
        dispatch(editDataAction({}));
        dispatch(dragDataAction({type:data.type, flag:true,index:i}));
        // updateDragData({type:data.type, flag:true,index:i}); 
        e.target.classList.add('dragging')}}
        onDoubleClick={(e)=>{
          dispatch(editDataAction({type:data.type, flag:true,index:i}));
          // updateEditData({type:data.type, flag:true,index:i})
        }}
        >
        {data.type}
        
      </div>
    )}


    </div>
      : <PreviewScreen/>}

    </div>
    <div className='tab'>
    <div style={tab?{background:'white'}:{}} onClick={e=>updateTab(prev=>!prev)}>Drop Screen</div>
    <div style={!tab?{background:'white'}:{}} onClick={e=>updateTab(prev=>!prev)}>Preview</div>
    </div>
    <div className={deletecss} 
    onDragOver={(event)=>{updateDeletecss('delete deleted');
    event.stopPropagation();event.preventDefault();}} 
    onDragLeave={()=>{updateDeletecss('delete')}}
    onDrop={()=>{updateDeletecss('delete'); 
    if(dragData.flag){
     triggerDelete();
      }
    }}
    ><ImBin className='bin_icon'/></div>
    </div>
  )
}

export default UiDropScreen
