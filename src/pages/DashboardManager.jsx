import React, { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const DashboardManager = () => {
    let user = useAuth();  
    console.log(user);
    return <div>{user.user?.role == 'ADMIN' ? <AdminDashboard/>: <UserDashboard/>}</div>;
};

export default DashboardManager;