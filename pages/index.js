import Image from 'next/image'
import Link from 'next/link'

import { Button, Divider, Form, Input, Col, Row } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import logo_name from '../public/logo_name.png'
import icon_facebook from '../public/icon_facebook.png'
import icon_github from '../public/icon_github.png'
import icon_linkedin from '../public/icon_linkedin.png'
import icon_msteam from '../public/icon_msteam.png'
import icon_google from '../public/icon_google.png'

import logo_image_main from '../public/logo_image_main.png'
import logo_name_lg from '../public/logo_name_lg.png'

import IconComponent from '../components/IconComponent'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const onFinish = (values) => {
    alert(`Email: ${values.email}\nPassword: ${values.password}`)
  };
  const onFinishFailed = (errorValues) => {
    let errorInfo = ''
    errorValues.errorFields.forEach(({ name, errors }) => {
      errorInfo += `${errors}\n`
    })
    alert(errorInfo);
  };
  return (
    <Row className={styles.loginForm}>
      {/* Form Left */}
      <Col className={styles.formLeft}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.title}>
            <span>Đăng nhập</span>
          </div>
          <div className={styles.subTitle}>
            <Image className={styles.logo_name} src={logo_name} alt="logo" />
            <span className={styles.text}> NỀN TẢNG HỌC LẬP TRÌNH HÀNG ĐẦU VIỆT NAM</span>
          </div>
        </div>
        {/* Main form */}
        <div className={styles.mainForm}>
          <Form
            wrapperCol={{
              span: 24,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              label="Email"
              className={styles.form_item}
              rules={[
                {
                  required: true,
                  message: 'Bạn chưa nhập email!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Nhập email"
                id='email'
                className={styles.form_input}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              className={styles.form_item}
              rules={[
                {
                  required: true,
                  message: 'Bạn chưa nhập mật khẩu!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu"
                id='password'
                className={styles.form_input} />
            </Form.Item>

            <div className={styles.form_forgot_pass}>
              <a href="#">Quên mật khẩu</a>
            </div>

            <Form.Item
              className={styles.form_btn}
              wrapperCol={{
                span: 24,
              }}
            >
              <Button id="submit_btn" type="primary" htmlType="submit">
                Bắt đầu ngay
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* Divider */}
        <div className={styles.divider}>
          <Divider id={styles.divider}>Hoặc đăng nhập bằng</Divider>
        </div>
        {/* Icon List */}
        <div className={styles.icon_list}>
          <IconComponent logo={icon_google} link="https://www.google.com/" />
          <IconComponent logo={icon_linkedin} link="https://www.linkedin.com/" />
          <IconComponent logo={icon_msteam} link="https://www.microsoft.com/vi-vn/microsoft-teams" />
          <IconComponent logo={icon_facebook} link="https://www.facebook.com/" />
          <IconComponent logo={icon_github} link="https://github.com" />
        </div>
      </Col>
      {/* Form Right */}
      <Col className={styles.right}>
        <div className={styles.logo_image}>
          <Image src={logo_image_main} alt="logo" />
        </div>
        <div className={styles.logo_name_lg}>
          <Image src={logo_name_lg} alt="logo" />
        </div>
      </Col>
    </Row>
  )
}
