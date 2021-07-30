import React, {FC, FormEvent, ReactElement} from 'react'
import FormContext from './FormContext'
import useForm, { FormInstance } from './useForm'

interface FormProps {
  children: ReactElement | ReactElement[],
  form?: FormInstance,
  onFinish?: (store: {[name: string]: any}) => void
}

const Form: FC<FormProps> = ({form, children, onFinish}) => {
  let formInst = useForm(form)

  React.useEffect(() => {
    if (onFinish) {
      formInst.onFinish = onFinish
    }
  }, [onFinish, formInst])

  return (
    <FormContext.Provider value={formInst}>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
          formInst.submit()
        }}
      > 
        {children}
      </form>
    </FormContext.Provider>
    
  )
}

export default Form
