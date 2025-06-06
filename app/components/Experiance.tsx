"use client";
import Link from "next/link";

const experiences = [
  {
    date: "Oct 2022 – Jan 2024",
    title: "Student Parliament Member",
    company: "Hope Enterprise University College",
    link: "https://www.heuc.edu.et",
    description: `I orchestrated 3 blood donation weeks, resolved student-admin conflicts, co-organized 2 charity weeks, led seminars, managed 7 campus clubs, and participated in policy voting.`,
  },
  {
    date: "June – Aug 2024",
    title: "Banking Intern",
    company: "Amhara Bank",
    link: "https://www.amharabank.com.et",
    description:
      "Assisted in customer account management, teller operations, and administrative duties across various departments.",
  },
  {
    date: "2021 – 2022",
    title: "Junior Web Developer",
    company: "Freelance Projects",
    link: "",
    description:
      "Built portfolio websites and landing pages using React, TailwindCSS, and Firebase for small businesses.",
  },
  {
    date: "2019 – 2020",
    title: "Tech Club Lead",
    company: "High School",
    link: "",
    description:
      "Led weekly meetups and programming challenges, mentoring students interested in technology.",
  },
];

const Experience = () => {
  return (
    <section className="relative px-4 py-12 bg-[#0f0e1a] text-white">
      <div className="mx-auto max-w-5xl">
        <div className="relative border-l border-gray-600 pl-6 ml-2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              {/* Circle icon */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#3f3d56] border-2 border-white shadow-md"></div>

              <p className="text-sm italic text-gray-400">{exp.date}</p>

              <h3 className="text-xl font-bold text-white mt-1">
                {exp.title}{" "}
                <span className="font-semibold text-indigo-400">
                  {exp.link ? (
                    <Link
                      href={exp.link}
                      target="_blank"
                      className="underline hover:text-indigo-300"
                    >
                      @ {exp.company}
                    </Link>
                  ) : (
                    <>@ {exp.company}</>
                  )}
                </span>
              </h3>

              <p className="text-gray-300 mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
