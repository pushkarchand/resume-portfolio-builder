import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Planview Inc",
    location: "Bangalore",
    period: "June 2022 - Present",
    highlights: [
      "Built an Agent Workflow Builder for dynamic business process management, improving operational efficiency.",
      "Integrated SharePoint for in-app document management, enhancing user experience and customer retention.",
      "Worked with micro-frontend architecture across multiple products to improve scalability and streamline workflows.",
      "Established Playwright-based end-to-end testing in GitHub CI/CD pipelines to ensure reliable deployments.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Slate.ai",
    location: "Bangalore",
    period: "Nov 2020 - May 2022",
    highlights: [
      "Built a construction-domain SaaS application from the ground up using React, TypeScript, CSS, and Apollo GraphQL.",
      "Integrated frontend with backend services using Apollo GraphQL, implementing queries, mutations, and actions via Hasura.",
      "Designed and implemented an end-to-end role-based access control (RBAC) system to ensure secure and scalable permissions.",
    ],
  },
  {
    title: "Senior Associate",
    company: "TheMathCompany",
    location: "Bangalore",
    period: "April 2020 - Nov 2020",
    highlights: [
      "Developed REST APIs for secure user authentication, authorization, and user activity tracking.",
      "Built web applications to integrate multiple products into a unified platform.",
      "Implemented CI/CD pipelines using Azure Pipelines to automate build, test, and deployment workflows.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Eqtibe",
    location: "Bangalore",
    period: "Oct 2018 - April 2020",
    highlights: [
      "Built a scalable business software platform supporting multiple business models and customer onboarding workflows.",
      "Developed Node.js APIs integrated with WhatsApp and a customizable chatbot for loan credit limit discovery.",
      "Implemented multi-step onboarding flows using Node.js, Express, MySQL, and Knex.js.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Sarnar Software",
    location: "Bangalore",
    period: "Oct 2015 - Oct 2018",
    highlights: [
      "Developed a Carnatic music platform with a custom Angular-based notation editor supporting advanced beat formatting.",
      "Built backend APIs for audio streaming and beat pattern recommendations to enhance user engagement.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of crafting scalable solutions and leading technical initiatives
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary glow hidden md:block" />

                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
