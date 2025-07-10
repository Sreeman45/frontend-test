const ProjectsTable = () => {
  const projects = [
    { name: "Dashboard UI", progress: 90, status: "Active", team: 5, deadline: "Jun 15" },
    { name: "E-commerce App", progress: 45, status: "Active", team: 8, deadline: "Jul 20" },
    { name: "Marketing Site", progress: 100, status: "Completed", team: 4, deadline: "May 30" },
    { name: "API Integration", progress: 75, status: "Active", team: 3, deadline: "Jun 25" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap font-medium">{project.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      project.progress === 100 ? 'bg-green-500' : 
                      project.progress > 70 ? 'bg-blue-500' : 
                      project.progress > 30 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{project.progress}%</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === "Completed" ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex -space-x-2">
                  {[...Array(project.team)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProjectsTable