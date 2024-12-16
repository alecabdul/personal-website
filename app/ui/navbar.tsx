import Link from "next/link";
import '@/app/ui/global.css';

export default function NavBar() {
    return (
            <nav className="text-gray-600 flex flex-row items-center bg-slate-200 sticky justify-center shadow-sm top-0 z-50"
                style={{
                    scrollBehavior: "smooth",
                }}>
                <ul className="flex flex-row gap-4 mt-2 mb-2">
                    <li>
                        <Link href="#Home">
                            <p className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Experience">
                            <p className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300">Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Education">
                            <p className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300">Education</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Projects">
                            <p className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300">Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Facts">
                            <p className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300">Facts</p>
                        </Link>
                    </li>
                </ul>
            </nav>

    )
}
