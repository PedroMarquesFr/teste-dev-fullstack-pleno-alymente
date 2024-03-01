import React from "react";
interface DetailsWrapperProps {
  title: string;
  content: string | number;
}
const DetailsWrapper: React.FC<DetailsWrapperProps> = ({ title, content }) => {
  return (
    <aside className="min-w-16 m-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-base">{content}</p>
    </aside>
  );
};

export default DetailsWrapper;
