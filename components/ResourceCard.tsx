import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

export default function ResourceCard({
  title,
  description,
  icon: Icon,
  href,
  isExternal = false,
  isDownload = false,
}: ResourceCardProps) {
  const CardContent = () => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
      <div className="flex items-start mb-4">
        <div className="p-3 bg-academic-blue-light rounded-lg">
          <Icon className="text-academic-blue" size={28} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      
      <div className="flex items-center text-academic-blue font-medium text-sm">
        {isDownload ? 'Download' : isExternal ? 'View External' : 'Learn More'}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );

  if (isExternal || isDownload) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={isDownload}
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      <CardContent />
    </Link>
  );
}

