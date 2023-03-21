import React from 'react'
let a = {
  background:'red'
};
const CustomInput = ({type="text",placeholder="NAME",value="",onchange=()=>{},css={border:'none'}}) => {
  console.log(css);
  return (
      <input type={type} placeholder={placeholder} value={value} onChange={onchange} style={css ? css : {border:'none'}}/>
  )
}

export default CustomInput
