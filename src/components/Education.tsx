import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "VTU",
    period: "2011 - 2015",
  },
  {
    degree: "PUC",
    institution: "Jain College",
    period: "2009 - 2011",
  },
];

const Education = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
