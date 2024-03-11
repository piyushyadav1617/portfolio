
import React from "react";
import Image from "next/image";

export default function TracingBeamDemo() {
  return (
    <div className="">
      {dummyContent.map((item, index) => (
        <div key={item.id} className="h-fit w-fit">
          <h1 className="text-3xl font-bold p-2 text-wrap md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-600 bg-opacity-50">{item.title}</h1>

          <div className="prose prose-sm dark:prose-invert mt-10 ">
            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

const dummyContent = [
  {
    id: 0,
    title: "Tracker: A Project Management Platform",
    description: (
      <>
        <p>
          Tracker is a web application that helps teams collaborate and manage
          their projects efficiently. Tracker is inspired by Jira, a popular
          project management tool, but offers a simpler and more user-friendly
          interface. Tracker allows users to create projects, assign tasks,
          track progress, and communicate with team members. Tracker is built
          with Next.js 14, a React framework that enables fast and scalable web
          development. Tracker uses TypeScript, a superset of JavaScript that
          adds static typing and other features. Tracker also leverages the
          following technologies: Tailwind: A utility-first CSS framework that
          helps create custom designs without writing much CSS code. Shadcn: A
          library that provides a collection of UI components for Next.js
          applications. PostgreSQL: A relational database system that stores and
          manages the data for Tracker. Prisma: An ORM (object-relational
          mapping) tool that simplifies database access and schema management.
          Zod: A library that validates and parses data types in TypeScript.
          Next Auth: A library that handles authentication and authorization for
          Next.js applications. Tracker is a personal project that is currently
          under development.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/tracker.png",
  }
];
