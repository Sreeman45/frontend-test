import { DollarSign, FileText, Mail, Users } from "lucide-react";


const ActivityFeed = () => {
  const activities = [
    { 
      icon: <Users className="w-4 h-4 text-blue-500" />, 
      title: "New user registered", 
      time: "2 mins ago",
      color: "bg-blue-100"
    },
    { 
      icon: <FileText className="w-4 h-4 text-green-500" />, 
      title: "Project 'Dashboard UI' completed", 
      time: "1 hour ago",
      color: "bg-green-100"
    },
    { 
      icon: <DollarSign className="w-4 h-4 text-purple-500" />, 
      title: "New invoice #1234", 
      time: "3 hours ago",
      color: "bg-purple-100"
    },
    { 
      icon: <Mail className="w-4 h-4 text-orange-500" />, 
      title: "New message from client", 
      time: "5 hours ago",
      color: "bg-orange-100"
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start">
          <div className={`p-2 rounded-lg mr-3 ${activity.color}`}>
            {activity.icon}
          </div>
          <div>
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ActivityFeed