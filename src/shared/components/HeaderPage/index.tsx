import React from 'react';
import Content from './component/Content';

interface HeaderPageProps {
  title: string;
  description: string;
}
function HeaderPage({ title, description }: HeaderPageProps) {
  return (
    <div className="h-[70vh] w-full flex justify-between overflow-hidden">
      <Content />
    </div>
  );
}

export default HeaderPage;
