import {useState} from "react";
import { Form, Input, Button, Row , Col} from 'antd';
import axios from "axios";

function CreateCobrador(){
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    
    const createCobrador = async () =>{
        const resp = await axios.post('http://localhost:8000/api/cobradores/', {
            nombres: nombre,
            apellidos: apellido,
            dpi: '232320',
            telefono: '12828282',
            idUsuario: 1
        })
        console.log(resp)
    }

    return(
        <div>

<Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
            >
        <Row>

                <Col span={12}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={(e) => setNombre(e.target.value)}/>
                </Form.Item>

                </Col>
                <Col span={12}>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input onChange={(e) => setApellido(e.target.value)} />
                </Form.Item>
                </Col>



            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={createCobrador}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
    

}

export default CreateCobrador