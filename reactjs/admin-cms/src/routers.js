import { DashboardPage } from "./views/pages/dashboard/Dashboard";
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Students } from "./views/pages/students-management/students/Students";
import { AddStudent } from "./views/pages/students-management/add-student/AddStudent";
import { EditStudent } from "./views/pages/students-management/edit-student/EditStudent";

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
            {
                path: "/student/edit/:id",
                title: "Edit Student",
                icon: "",
                component: <EditStudent />,
                children: [],
                hidden: true,
            },
        ],
    }
]

export default routers;