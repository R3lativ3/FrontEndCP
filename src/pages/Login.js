import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Layout, Menu, Button, Row, Col, Typography, Form, Input } from "antd";
import uri from "../static/environment";
import { AuthContext } from '../context/AuthContext'

const { Title } = Typography;
const { Content } = Layout;

const Login = () =>{
  const { login: loginContext } = useContext(AuthContext)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = async () => {
    try{
      const response = await axios.post(uri+'/login', { username: user, psw: password })
      console.log(response.data)
      loginContext(response.data.token, response.data.username, response.data.nombre)
    }
    catch(exception){
      alert(exception)
    }
  }

    return (
      <div style={{
        opacity:0.8,
        position:'fixed',
        width:'100%',
        height:'100%',
        top:'0px',
        left:'0px',
        zIndex:'1000',
        background: '#00416A',
        background: '-webkit-linear-gradient(to bottom, #E4E5E6, #00416A)',
        background: 'linear-gradient(to bottom, #E4E5E6, #00416A)'
      }}>
        
          <Content className="signin container" style={{ marginBlockStart: 80 }}>
            <Row gutter={[24, 0]} justify="space-around">
              <Col>
                <Title className="mb-15 text-center">Iniciar Sesion</Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" onChange={(evt) => setUser(evt.target.value)} />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input placeholder="Password" onChange={(evt) => setPassword(evt.target.value)} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      htmlType="submit"
                      style={{ width: "100%", background:'black', color:'white', borderColor:'black' }}
                      onClick={login}
                    >
                      Login
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    Olvidaste tu contrasea?&#160;&#160;&#160;<Link to="/sign-up" className="font-bold">
                       Recuperar
                    </Link>  
                  </p>
                </Form>
              </Col>
            </Row>
          </Content>
      </div>
    )
}

export default Login
