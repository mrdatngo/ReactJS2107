import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { AddStudentsAction } from '../../../../redux/actions/students';

const { Option } = Select;
const { Text } = Typography

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
/**
* @author
* @function AddStudent
**/

const AddStudent = (props) => {
    const [form] = useForm();
    const [classes] = useState([
        {
            id: 1,
            name: "ReactJS"
        },
        {
            id: 2,
            name: "HMTML"
        }
        ,
        {
            id: 3,
            name: "CSS"
        }
    ])
    const dispatch = useDispatch()
    const { loading, success, message } = useSelector((state) => state.students.addStudent)

    useEffect(() => {
        if (success) {
            onReset()
        }
    }, [success])

    const onFinish = (values) => {
        dispatch(AddStudentsAction(values))
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            <h3>Add Student</h3>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="name" label="Student Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="age" label="Age" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="class" label="Class" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select class"
                        allowClear
                    >
                        {
                            classes.map(c => {
                                return <Option key={c.id} value={c.name}>{c.name}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Text type={ success ? "success" : "danger"}>{message}</Text>
                    <br /> <br />
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddStudent
