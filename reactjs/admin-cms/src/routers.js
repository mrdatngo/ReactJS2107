import { DashboardPage } from "./views/pages/dashboard/Dashboard";
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
const routers = [
    {
        path: "/dashboard",
        title: "Dashboard",
        icon: <PieChartOutlined />,
        component: <DashboardPage />,
        children: []
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
                component: <div>Create Student</div>,
                children: [],
            },
            {
                path: "/students",
                title: "List Student",
                icon: "",
                component: <div>List Student</div>,
                children: [],
            },
        ],
    }
]

export default routers;