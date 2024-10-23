export default function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 
    'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 
    'AWS', 'Git', 'REST APIs', 'WebSocket', 'Redux'
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}