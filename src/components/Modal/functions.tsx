import Modal, { ModalProps, ModalLayout } from "./Modal";
import ReactDOM from 'react-dom'
import { Content } from "antd/lib/layout/layout";



const render = ({children, ...props}: ModalProps) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  
  function destroy() {
    container?.parentNode?.removeChild(container)
  }

  ReactDOM.render(
    <ModalLayout {...props} content={children}/>, container)
  return destroy
}

export const info = (props: ModalProps) => {
  const destroy = render({
    ...props,
    footer: <div>确定</div>
  })
  return {
    destroy
  }
}