import { FC, ReactNode, useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import './modal.css'

export interface ModalProps {
  visible?: boolean,
  children?: ReactNode | ReactNode[],
  footer?:  ReactNode | ReactNode[],
  onCancel?: () => any
}

interface ModalLayoutProps extends ModalProps {
  content?: ReactNode | ReactNode[]
}

export const ModalLayout : FC<ModalLayoutProps> = ({content, footer, visible = true}) => {
  return (
    <div className="modal-wrap" style={{display: visible ? '' : 'none'}}>
      <div className="modal-mask"></div>
      <div className="modal-container">
        <div>标题</div>
        <div>{content}</div>
        <div>{footer}</div>
      </div>
    </div>
  )
}

const Modal: FC<ModalProps> = ({visible = false, children, footer, onCancel}) => {
  let containerRef = useRef<HTMLElement>()
  let container = containerRef.current
  console.log('func-Modal', container, visible)

  if (visible && !container) {
    container = document.createElement('div')
    container.id = Math.random() + ''
    document.body.append(container)
    containerRef.current = container
  }

  useEffect(() => {
    return () => {
      if (containerRef.current) {
        containerRef.current?.parentNode?.removeChild(containerRef.current)
      }
    }
  }, [])

  const content = children

  let portal = null

  if (visible || !!portal) {
    portal = portal || <ModalLayout
      content={content}
      footer={footer}
      visible={visible}
    /> 
  }


  return container ? ReactDOM.createPortal(
    portal, 
    container
  ) : null
}

export default Modal