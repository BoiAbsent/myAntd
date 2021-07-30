import {FC, useContext} from 'react'

interface InputProps  {
  value?: string | number,
  ooChange?: () => void,
  placeholder?: string
}

const Item: FC<InputProps> = (props) => {
  console.log(props)
  return (
    <input {...props}/>
  )
}

export default Item