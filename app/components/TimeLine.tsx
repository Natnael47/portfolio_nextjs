import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

const TimeLine = () => {
  const data = [
    {
      title: (
        <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Nov 2022 - Jan 2024
        </h3>
      ),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Student Parliament Member</strong>
            <br />
            <Link
              href="https://www.heuc.edu.et"
              target="_blank"
              className="underline text-blue-500"
            >
              Hope Enterprise University College
            </Link>
            <br />I orchestrated three successful blood donation weeks, resolved
            student-administration conflicts, co-organized charity week twice,
            facilitated student-led seminars, managed seven campus clubs, and
            contributed to policy-making through voting participation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/pro-2-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/pro-2-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          June 14 – Aug 2
        </h3>
      ),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Website Development Intern / Frontend</strong>
            <br />
            Amhara Bank – Full-time, Internship
            <br />
            During my Web Development internship, I actively participated in a
            collaborative learning environment. I improved my skills in frontend
            design, user interface development, and technical documentation. The
            internship strengthened my understanding of building and enhancing
            responsive web applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/pro-1-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/pro-1-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Sep 2024 – Jan 2025
        </h3>
      ),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <strong>Full Stack Developer</strong>
            <br />
            Nexa Engineering – Remote, Full-time
            <br />
            At Nexa Engineering, I led the development and deployment of a
            complete web platform for showcasing and managing the company&apos;s
            product catalog. The platform included both user-facing and admin
            dashboards. I used React, Tailwind CSS, Node.js, Express, and
            MongoDB.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Ongoing
        </h3>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I continuously build and refine personal and collaborative projects
            to sharpen my skills and stay current with industry trends in both
            web and mobile development. My focus includes modern frontend
            frameworks, responsive UI/UX design, RESTful APIs, backend
            architecture, and cross-platform development.
          </p>
          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Projects I&apos;ve Been Practicing:
          </p>
          <div className="space-y-1">
            {[
              "Online food ordering apps",
              "Hotel booking systems",
              "Song streaming platforms",
              "Appointment scheduling apps",
              "Blog and content management systems",
              "Quiz and trivia games",
            ].map((project) => (
              <div
                key={project}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
              >
                ✅ {project}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default TimeLine;
