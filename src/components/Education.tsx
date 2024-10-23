interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

function EducationItem({ degree, institution, period, details }: EducationItemProps) {
  return (
    <div className="border-l-2 border-blue-500 pl-4">
      <h3 className="font-medium text-gray-900">{degree}</h3>
      <p className="text-gray-600">{institution}</p>
      <p className="text-gray-500">{period}</p>
      {details && <p className="mt-2 text-gray-600">{details}</p>}
    </div>
  );
}

export default function Education() {
  const education = [
    {
      degree: "National University of Lesotho",
      institution: "Bachelor of Science in Computer Science",
      period: "2015 - 2019",
      details: "Focus on Software Engineering, Database Systems, and Web Development"
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900">Education</h2>
      <div className="mt-4 space-y-6">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </div>
  );
}