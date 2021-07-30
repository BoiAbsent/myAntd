import _Modal, { ModalProps } from './Modal'
import { info } from './functions'
import useModal from './useModal'

type ModalType = typeof _Modal
interface ModalInterface extends ModalType {
  info: (props: ModalProps) => any,
  useModal: () => any
}

const Modal = _Modal as ModalInterface
Modal.info = info
Modal.useModal = useModal

export default Modal