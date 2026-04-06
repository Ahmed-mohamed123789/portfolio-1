import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-black/10 dark:border-white/10  backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-2">
            Ahmed Mohamed
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Frontend Developer | React & Next.js Specialist
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/Ahmed-mohamed123789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mohamed-393574351"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahamdalshrqawy244@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-black/5 dark:border-white/5 py-6 mt-4">
        <p className="text-center text-sm text-gray-500">
          © {currentYear} Ahmed Mohamed Alshrqawy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
