import React,{useState,useEffect} from 'react'
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import { dropDataAction } from './../redux/reducer1/action';
const settingArray = [{input:[{width:true,height:true,validator:true}]}];
const SettingsBar = () => {
  const dispatch = useDispatch();
  const editData = useSelector(state => state.editData);
  const dropData = useSelector(state => state.dropData);
  console.log('====================================');
  console.log(dropData[editData?.index]?.cssRaw.settingHeight);
  console.log(editData.index);
  const [settingState, updateSettingState] = useState({
    settingHeight:0,
    settingWidth:0,
    validator:"",
  })
  useEffect(() => {
    if(dropData[editData?.index]?.cssRaw && Object.keys(dropData[editData?.index]?.cssRaw).length>0)
    {updateSettingState(dropData[editData?.index]?.cssRaw);
      console.log(dropData[editData?.index]?.cssRaw);
      console.log(settingState);}
else
{
  updateSettingState(
    {settingHeight:0,
    settingWidth:0,
    validator:""}
    );
console.log(settingState);}
  }, [editData])
  const saveCssSettings = () =>{
    console.log(editData.index);
    let tempArr = dropData;
    console.log(`${settingState.height}px`);
    tempArr[editData.index].cssRaw = settingState;
    tempArr[editData.index].css = {
      height:`${settingState.settingHeight}px`,
      width:`${settingState.settingWidth}px`,
      border:'0.1rem solid black',
    };
    dispatch(dropDataAction([...tempArr]));
  }
  return (
    <div className='setting_bar'>
    <div className='setting_bar_header'>
    <h3 className='heading'>Setiings</h3>
    </div>
    {editData.type && <div className='save_btn' onClick={saveCssSettings}>Save</div>}
   <div className='setting_form'>
   {editData.type &&
   <>
   <div className="setting_field">Width:
   <input type="number" name='settingHeight' defaultValue={0} value={settingState.settingWidth} onChange={e=>updateSettingState((prev)=>({...prev,"settingWidth":e.target.value}))}/>
   <div className='inner_select'>
   rem
   </div>
   </div>
   <div className="setting_field">Height:<input type="number" name='settingHeight' defaultValue={0} value={settingState.settingHeight} onChange={e=>updateSettingState((prev)=>({...prev,"settingHeight":e.target.value}))}/>
   <div className='inner_select'>
   rem
   {/*
   <select>
   <option selected>px</option>
   <option>rem</option>
   </select>*/}
   </div>
   </div>

   <div className="setting_field">Margin:
   <input type="number" name='settingHeight' defaultValue={0} value={settingState.settingWidth} onChange={e=>updateSettingState((prev)=>({...prev,"settingWidth":e.target.value}))}/>
   <div className='inner_select'>
   rem
   </div>
   </div>

   <div className="setting_field">Padding:
   <input type="number" name='settingHeight' defaultValue={0} value={settingState.settingWidth} onChange={e=>updateSettingState((prev)=>({...prev,"settingWidth":e.target.value}))}/>
   <div className='inner_select'>
   rem
   </div>
   </div>

   <div className="setting_field">Border Width:
   <input type="number" name='settingHeight' defaultValue={0} value={settingState.settingWidth} onChange={e=>updateSettingState((prev)=>({...prev,"settingWidth":e.target.value}))}/>
   <div className='inner_select'>
   rem
   </div>
   </div>

   <div className="setting_field">Border Color:
   <input type="color" />
   </div>

   <div className="setting_field">Validatior:
<div className='outer_select'>
<select>
None
<option  title="Tooltip">None</option>
<option>None</option>
<option>None</option>
<option>None</option>
</select>
</div>
   </div>
   </>
   }
   </div>
    </div>
  )
}

export default SettingsBar
