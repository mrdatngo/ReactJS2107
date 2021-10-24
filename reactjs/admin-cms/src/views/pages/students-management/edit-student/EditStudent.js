import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { FetchStudentAction, UpdateStudentAction } from '../../../../redux/actions/students';

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
* @function EditStudent
**/

export const EditStudent = (props) => {
    const [form] = useForm();
    const [classes, setClasses] = useState([
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
    const [firstTime, setFirstTime] = useState(true)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        // fetch student
        if (params.id) {
            dispatch(FetchStudentAction(params.id))
        }
    }, [])

    const student = useSelector((state) => {
        let { student } = state.students
        if (student.success && firstTime) {
            form.setFieldsValue({
                id: student.data.id,
                name: student.data.name,
                age: student.data.age,
                address: student.data.address,
                class: student.data.classes[0],
            });
            setFirstTime(false)
        }
        return student
    })

    const { loading, success, message } = useSelector((state) => state.students.updateStudent)
    const onFinish = (values) => {
        dispatch(UpdateStudentAction(values))
    };

    return (
        <>
            <h3>Edit Student</h3>

            {
                student.loading ? ("Loading...") : (
                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <Form.Item name="id" label="Student Id" rules={[{ required: true }]}>
                            <Input disabled />
                        </Form.Item>
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
                            <Text type={success ? "success" : "danger"}>{message}</Text>
                            <br /> <br />
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )
            }
        </>
    )
}
