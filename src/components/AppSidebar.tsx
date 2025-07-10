// components/Sidebar.tsx
import { Home, Settings, LogOut, Mail } from 'lucide-react';

const Sidebar = ({ isOpen }: any) => {
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard" },
   
    { icon: <Mail className="w-5 h-5" />, label: "Messages" },
  ];

  return (
    <aside className={`h-full bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4 border-b">
        {isOpen ? (
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">admingloves</h2>
        ) : (
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center mx-auto">
            <span className="text-white font-bold">AP</span>
          </div>
        )}
      </div>
      
      <nav className="p-4">
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${index === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <div className={`${isOpen ? 'mr-3' : 'mx-auto'}`}>
                {item.icon}
              </div>
              {isOpen && <span>{item.label}</span>}
            </button>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100">
          <button className={`flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 ${isOpen ? '' : 'justify-center'}`}>
            <Settings className="w-5 h-5" />
            {isOpen && <span className="ml-3">Settings</span>}
          </button>
          <button className={`flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 ${isOpen ? '' : 'justify-center'}`}>
            <LogOut className="w-5 h-5" />
            {isOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;