import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ContriBlock',
    subtitle: 'Decentralized Open-Source Contribution System',
    year: '2025',
    description: 'Major project: A blockchain-based platform for managing and verifying open-source contributions with KYC, IPFS storage, token rewards, and admin approval workflow.',
    tech: ['Blockchain', 'Solidity', 'Flask', 'React', 'IPFS', 'REST API'],
    github: 'https://github.com/Adarsh-codesOP/ContriBlock.git',
    highlights: [
      'Smart contracts for contribution verification',
      'Token reward mechanism',
      'KYC + admin review system',
    ],
  },

  {
    title: 'Video-to-Note Generator',
    subtitle: 'Lecture Video to Structured Notes',
    year: '2024',
    description: 'Mini project: System that converts uploaded lecture videos into clean structured notes using NLP and DistilBERT.',
    tech: ['Python', 'NLP', 'DistilBERT', 'Flask', 'AI/ML'],
    github: 'https://github.com/Adarsh-codesOP/ContriBlock.git',
    highlights: [
      'Automatic note generation from video',
      'Clean and structured output format',
      'Supports long lecture processing',
    ],
  },

  {
    title: 'AI Customer Assistant Chatbot',
    subtitle: 'AI Chatbot for E-Commerce',
    year: '2024',
    description: 'AI-powered shopping assistant that retrieves accurate product details, recommends items, and answers queries using advanced AI models.',
    tech: ['AI/ML', 'Gemini API', 'React', 'Node/Flask'],
    github: 'https://github.com/Akshaybirwa/video-note-generator.git',
    highlights: [
      'Real-time AI product search',
      'Context-aware conversation system',
      'Designed for e-commerce websites',
    ],
  },

  {
    title: 'AI Code Analyzer & Debugger',
    subtitle: 'AI Developer Assistant Tool',
    year: '2024',
    description: 'An AI-powered system that analyzes code, identifies issues, explains logic, and suggests fixes in real time. Works for multiple languages.',
    tech: ['AI/ML', 'LLM', 'Python', 'React', 'NLP'],
    github: 'https://github.com/Akshaybirwa/CodeBoost-AI.git',
    highlights: [
      'Automatic bug detection and explanation',
      'Multi-language support',
      'Developer-friendly UI for code analysis',
    ],
  },

  {
    title: 'Mail Filter & Slack Notification System',
    subtitle: 'Automated Message Sorting + Alerts',
    year: '2025',
    description: 'AI-based classifier for filtering important emails and sending instant Slack notifications for high-priority messages.',
    tech: ['Python', 'NLP', 'Slack API', 'Automation'],
    github: 'https://github.com/Akshaybirwa/onebox1.git',
    highlights: [
      'Real-time mail classification',
      'Slack alert integration',
      'Improves workflow and reduces missed emails',
    ],
  },

  {
    title: 'Blockchain Certificate Verification System',
    subtitle: 'Secure Certificate Validation',
    year: '2025',
    description: 'Personal project that verifies academic or work certificates using blockchain to prevent tampering and ensure authenticity.',
    tech: ['Blockchain', 'Solidity', 'Flask', 'React', 'IPFS'],
    github: 'https://github.com/Akshaybirwa/BlockCertify-Blockchain-Based-Certificate-Verification-System.git',
    highlights: [
      'Immutably stores certificate hashes',
      'Verifies ownership and authenticity',
      'Solidity smart contract-based validation',
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Prevent re-animation by locking the state
const lockedVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [animationLocked, setAnimationLocked] = useState(false);
  
  // Lock animation state once it's been triggered
  useEffect(() => {
    if (isInView && !animationLocked) {
      setAnimationLocked(true);
    }
  }, [isInView, animationLocked]);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    return (
      <motion.div
        variants={animationLocked ? lockedVariants : itemVariants}
      >
        <Card className="glass group hover:glow-primary transition-all duration-500 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Project Info */}
            <div className="md:col-span-2">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-primary font-sans">
                      {project.subtitle} • {project.year}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-center gap-3">
              {project.github && (
                <Button
                  variant="outline"
                  className="glass w-full group/btn"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                  View Code
                </Button>
              )}
              {project.website && (
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open(project.website, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="py-32 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animationLocked ? 'visible' : (isInView ? 'visible' : 'hidden')}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-16 text-gradient tracking-tight"
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}