import React from "react";

interface ProgramCardProps {
  program: {
    icon: React.ElementType;
    title: string;
    description: string;
    image?: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      {program.image && (
        <div className="flex-shrink-0">
          <img
            className="h-64 w-full object-cover"
            src={program.image}
            alt={program.title}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbbf24] mr-4">
              <program.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {program.title}
            </h3>
          </div>
          <p className="mt-3 text-base text-gray-500">{program.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
