import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="flex-1 p-8 bg-gray-100">
                <DashboardHeader />
                <Outlet />
            </div>
        </div>
    );
}
