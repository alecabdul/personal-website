import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-gray-600 flex flex-col items-center justify-center">
            <ul className="flex flex-row gap-4 mb-3 mt-10">
                <li>
                    <Link
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:alecabdul99@gmail.com"
                    >
                        <p>Email</p>
                    </Link>
                </li>
{/*                 <li>
                    <Link
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/Alec_Abdul-Rahim_Resume.pdf"
                    >
                        <p>Resume</p>
                    </Link>
                </li> */}
                <li>
                    <Link
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/alec-abdul-rahim-6812ba183/"
                    >
                        <p>LinkedIn</p>
                    </Link>
                </li>
            </ul>
            <p>
                Built with React & Next.js. Hosted on Vercel
            </p>
            <p className="mb-12">
            ©  {new Date().getFullYear()} Alec Abdul-Rahim
            </p>
        </footer>
    );
}
