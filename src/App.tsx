import Form from './components/Form/index'
import Input from './components/Input'
import Modal from './components/Modal'
// import {Modal} from 'antd'
import 'antd/dist/antd.css'
import './App.css';
import { useEffect, useRef, useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Form
//         onFinish={(values) => {
//           console.log('onFinish', values)
//         }}
//       >
//         <Form.Item name='name' initialValue='boi'>
//           <Input/>
//         </Form.Item>
//         <Form.Item name='email'>
//           <Input placeholder="请输入邮箱"/>
//         </Form.Item>
//         <button type="submit">提交</button>
//       </Form>

//       <Form
//         onFinish={(values) => {
//           console.log('onFinish', values)
//         }}
//       >
//         <Form.Item name='name' initialValue='boi'>
//           <Input/>
//         </Form.Item>
//         <Form.Item name='email'>
//           <Input placeholder="请输入邮箱"/>
//         </Form.Item>
//         <button type="submit">提交</button>
//       </Form>
//     </div>
//   );
// }

function App() {
  const [visible, setVisible] = useState(false)
  const [exist, setExist] = useState(true)

  const [hookModal, contextHolder] = Modal.useModal()

  useEffect(() => {
    const modal = hookModal.info({footer: '111'})
    setTimeout(() => {
      modal.destroy()
    }, 4000);
  }, [])

  return (
    <div className="App">
      <button onClick={() => setVisible(v => !v)}>
        visible: {String(visible)}
      </button>
      <button onClick={() => setExist(v => !v)}>
        exit: {String(exist)}
      </button>
      {exist ? <div style={{width: '100px', height: '100px', backgroundColor: 'red'}}>
        <Modal visible={visible} onCancel={() => {setVisible(false)}}>
          66666
        </Modal>  
      </div> : 'no'}
      <button
        onClick={() => {
          const modal = Modal.info({
            onCancel: () => {setVisible(false)}
          })
          setTimeout(() => {
            modal?.destroy()
          }, 4000);
        }}
      >Modal.info</button>
      <div>
        {contextHolder}
      </div>
    </div>
  );
}

export default App;
