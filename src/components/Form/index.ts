import _Form from './FormComp'
import FormItem from './FormItem'

type FormType = typeof _Form
interface FormInterface extends FormType {
  Item: typeof FormItem
}

const Form = _Form as FormInterface

Form.Item = FormItem

export default Form