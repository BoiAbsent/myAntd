import React, {FC, ReactElement, cloneElement, useContext} from 'react'
import FormContext from './FormContext'

interface ItemProps {
  name: string,
  children: ReactElement,
  initialValue?: string
}

const Item: FC<ItemProps> = ({name, children, initialValue}) => {
  const {getFieldVlaue, setFieldsVlaue, subscribe} = useContext(FormContext)
  const value = getFieldVlaue(name) || initialValue || ''

  const [, update] = React.useReducer(x => x+1, 0)
  React.useEffect(() => {
    console.log('useEffect', name)
    const unSubscribe = subscribe(name, update)
    return unSubscribe
  }, [name, subscribe])

  console.log('render', name)

  return (
    <div>
      <span>{name}</span>
      {cloneElement(children, {
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setFieldsVlaue({[name]: e.target.value})
        }
      })}
    </div>
  )
}

export default Item