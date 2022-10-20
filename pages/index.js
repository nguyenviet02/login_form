import Head from 'next/head'
import Image from 'next/image'

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
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row className={styles.login_form}>
      {/* Form Left */}
      <Col span={13} className={styles.left}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.title}>
            <span>Đăng nhập</span>
          </div>
          <div className={styles.sub_title}>
            <Image className={styles.logo_name} src={logo_name} alt="logo" />
            <span className={styles.text}> NỀN TẢNG HỌC LẬP TRÌNH HÀNG ĐẦU VIỆT NAM</span>
          </div>
        </div>
        {/* Main form */}
        <div className={styles.main}>
          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
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
                  message: 'Please input your email!',
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
              label="Mật khẩu"
              className={styles.form_item}
              rules={[
                {
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                bordered={false}
                placeholder="Nhập mật khẩu"
                id='password'
                className={styles.form_input} />
            </Form.Item>

            <Form.Item
              name="remember"
              className={styles.form_forgot_pass}
              valuePropName="checked"

              wrapperCol={{
                span: 24,
              }}
            >
              <a href="#">Quên mật khẩu</a>
            </Form.Item>

            <Form.Item
              className={styles.form_btn}
              wrapperCol={{
                span: 24,
              }}
            >
              <Button bordered={false} id="submit_btn" type="primary" htmlType="submit">
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
          <IconComponent logo={icon_google} />
          <IconComponent logo={icon_facebook} />
          <IconComponent logo={icon_github} />
          <IconComponent logo={icon_linkedin} />
          <IconComponent logo={icon_msteam} />
        </div>
      </Col>
      {/* Form Right */}
      <Col span={11} className={styles.right}>
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
