import { useRef } from 'react'

export class FormInstance {
  FormStore: {[name: string]: any} = {}
  subscribers = new Map()
  callBacks = new Map<string, (store: {[name: string]: any}) => any>()
  
  onFinish = (store: {[name: string]: any}) => {}

  
  setFieldsVlaue = (partialStore: {[k: string]: any}) => {
    this.FormStore = Object.assign(this.FormStore, partialStore)
    Object.keys(partialStore).forEach(key => {
      if (this.subscribers.has(key)) {
        const callback = this.subscribers.get(key)
        callback()
      }
    })
  }
  getFieldsVlaue = () => {
    return this.FormStore
  }
  getFieldVlaue = (name: string) => {
    return this.FormStore[name]
  }
  getInstance = () => {
    return this
  }
  subscribe = (name: string, callback: () => void) => {
    this.subscribers.set(name, callback)
    return () => {this.subscribers.delete(name)}
  }
  submit = () => {
    this.onFinish(this.getFieldsVlaue())
  }
}

const useForm = (form?: FormInstance) => {
  const formRef = useRef<FormInstance>()
  if (!formRef.current) {
    const instance = form || new FormInstance()
    formRef.current = instance
  }

  return formRef.current
}

export default useForm