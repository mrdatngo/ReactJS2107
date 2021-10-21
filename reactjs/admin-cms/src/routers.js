import { DashboardPage } from "./views/pages/dashboard/Dashboard";
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Students } from "./views/pages/students-management/students/Students";
import { AddStudent } from "./views/pages/students-management/add-student/AddStudent";

const routers = [
    {
        path: "/",
        title: "Dashboard",
        icon: <PieChartOutlined />,
        component: <DashboardPage />,
        children: [],
        exact: true
    },
    {
        path: "/test",
        title: "Test",
        icon: <PieChartOutlined />,
        component: <p>Test</p>,
        children: []
    },
    {
        path: "/students",
        title: "Students",
        icon: <UserOutlined />,
        component: "",
        children: [
            {
                path: "/create-student",
                title: "Create Student",
                icon: "",
                component: <AddStudent />,
                children: [],
            },
            {
                path: "/students",
                title: "List Student",
                icon: "",
                component: <Students />,
                children: [],
            },
        ],
    }
]

export default routers;