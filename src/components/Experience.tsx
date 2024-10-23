interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

function ExperienceItem({ title, company, period, responsibilities }: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-blue-500 pl-4">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{company} • {period}</p>
      <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "Vodacom Lesotho",
      period: "2021 - Present",
      responsibilities: [
        "Led development of the SuperSport App using React Native, enabling live sports streaming and real-time updates",
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Implemented CI/CD pipelines and automated testing procedures",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Software Developer",
      company: "Lesotho Communications Authority",
      period: "2019 - 2021",
      responsibilities: [
        "Developed the OpenServe App for service management and monitoring",
        "Built and maintained web applications using React and Django",
        "Implemented database solutions using PostgreSQL and MongoDB",
        "Collaborated with stakeholders to gather requirements and deliver solutions"
      ]
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
      <div className="mt-4 space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}