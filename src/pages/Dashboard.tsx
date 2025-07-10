// components/Dashboard.tsx
import { useState } from 'react';

import { Activity, Users, DollarSign, Briefcase, TrendingUp, PieChart } from 'lucide-react';
import Sidebar from '@/components/AppSidebar';
import Navbar from '@/components/navbar';
import StatCard from '@/components/statscard';
import ChartCard from '@/components/chatcard';
import ActivityFeed from '@/components/activity';
import ProjectsTable from '@/components/projects';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} isSidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50">

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>

 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              icon={<Users className="w-5 h-5" />}
              title="Total Users" 
              value="2,548" 
              change="+12.5%" 
              color="blue" 
            />
            <StatCard 
              icon={<DollarSign className="w-5 h-5" />} 
              title="Revenue" 
              value="$48,245" 
              change="+8.2%" 
              color="green" 
            />
            <StatCard 
              icon={<Briefcase className="w-5 h-5" />} 
              title="Projects" 
              value="36" 
              change="+5" 
              color="purple" 
            />
            <StatCard 
              icon={<Activity className="w-5 h-5" />} 
              title="Activity" 
              value="89%" 
              change="+3.2%" 
              color="orange" 
            />
          </div>

    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <ChartCard
              title="Revenue Trend" 
              icon={<TrendingUp className="w-5 h-5" />}
              color="bg-gradient-to-r from-blue-500 to-blue-400"
            >
              <div className="h-64 bg-blue-100 rounded-lg flex items-center justify-center">
                <p className="text-blue-500">Chart placeholder</p>
              </div>
            </ChartCard>
            
            <ChartCard 
              title="Traffic Sources" 
              icon={<PieChart className="w-5 h-5" />}
              color="bg-gradient-to-r from-purple-500 to-purple-400"
            >
              <div className="h-64 bg-purple-100 rounded-lg flex items-center justify-center">
                <p className="text-purple-500">Chart placeholder</p>
              </div>
            </ChartCard>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className="text-sm text-blue-500 hover:text-blue-700">View All</button>
              </div>
              <ActivityFeed />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Active Projects</h3>
              <button className="text-sm text-blue-500 hover:text-blue-700">View All</button>
            </div>
            <ProjectsTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;