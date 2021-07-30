import { ReactNode, useState } from "react";
import Modal, { ModalProps, ModalLayout } from "./Modal";


const useModal = () => {


  let [nodes, setNode] = useState<ReactNode[]>([]) 

  const ContextHolder = () => {
    return (<>{nodes}</>)
  }

  let funcs = {
    info(props: ModalProps) {
      const modal = <Modal {...props} visible={true}/>
      setNode(nodes => [...nodes, modal])
      return {
        destroy: () => {
          setNode(nodes => nodes.filter(node => node !== modal))
        }
      }
    }
  }
  return [funcs, <ContextHolder/>]
}

export default useModal