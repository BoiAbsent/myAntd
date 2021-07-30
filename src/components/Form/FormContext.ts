import {createContext} from "react";
import {FormInstance} from './useForm'


const FieldContext = createContext<FormInstance>({} as FormInstance);

export default FieldContext;