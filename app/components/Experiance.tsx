"use client";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    date: "Oct 2022 – Jan 2024",
    title: "Student Parliament Member",
    company: "Hope Enterprise University College",
    link: "https://www.heuc.edu.et",
    description: `I've orchestrated 3 successful blood donation weeks, resolved student-admin conflicts, co-organized charity week twice, held student seminars, managed 7 campus clubs, and contributed to campus policy voting.`,
    avatar: "/avatars/student.png",
    person: "You",
  },
  {
    date: "June – Aug 2024",
    title: "Banking Intern",
    company: "Amhara Bank",
    link: "https://www.amharabank.com.et",
    description:
      "Assisted in customer account management, performed teller operations, and supported branch administrative duties across various departments.",
    avatar: "/avatars/bank.png",
    person: "You",
  },
  {
    date: "2021 – 2022",
    title: "Junior Web Developer",
    company: "Freelance Projects",
    link: "",
    description:
      "Built portfolio websites and landing pages for small businesses using React, TailwindCSS, and Firebase.",
    avatar: "/avatars/web.png",
    person: "You",
  },
  {
    date: "2019 – 2020",
    title: "Tech Club Lead",
    company: "High School",
    link: "",
    description:
      "Led a team of students to organize weekly tech meetups and programming challenges.",
    avatar: "/avatars/club.png",
    person: "You",
  },
];

const Experience = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-x-4 relative pb-10">
            {/* Time */}
            <div className="min-w-[80px] text-right text-xs text-gray-500 dark:text-neutral-400 pt-1">
              {exp.date}
            </div>

            {/* Timeline indicator */}
            <div className="relative">
              <div className="size-3 rounded-full bg-blue-600 dark:bg-blue-400 absolute top-1 left-[6px] z-10"></div>
              {index !== experiences.length - 1 && (
                <div className="absolute top-3 left-[9px] w-px h-full bg-gray-200 dark:bg-neutral-700 z-0"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {exp.title}{" "}
                {exp.link ? (
                  <Link
                    href={exp.link}
                    target="_blank"
                    className="text-blue-600 underline decoration-dotted hover:text-blue-800 dark:text-blue-400"
                  >
                    @ {exp.company}
                  </Link>
                ) : (
                  <span className="text-gray-600 dark:text-neutral-400">
                    @ {exp.company}
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-neutral-300">
                {exp.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={exp.avatar}
                  alt={`${exp.person} avatar`}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <span className="text-xs text-gray-500 dark:text-neutral-400">
                  {exp.person}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
