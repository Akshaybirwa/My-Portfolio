import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const certGroups = [
  {
    title: 'AICTE / Ethnotech',
    items: [
      'Database Using SQL',
      'Data Analytics Using Excel',
      'Data Structures Using C Programming',
      'Node.js',
      'HTML5 Application Development',
    ],
  },
  {
    title: 'Cohart AICTE',
    items: [
      'AI & Machine Learning',
      'Android App Development',
      'Python Programming',
      'NoSQL & MongoDB',
      'Data Structures & Algorithms',
    ],
  },
  {
    title: 'NPTEL',
    items: ['Data Structures and Algorithms Using Java'],
  },
  {
    title: 'Springboard',
    items: ['NoSQL', 'MongoDB', 'Data Structures', 'Python Programming'],
  },
  {
    title: 'IBM',
    items: ['IBM Python for Data Science', 'IBM Data Analytics Essentials', 'IBM AI Fundamentals'],
  },
  {
    title: 'Google',
    items: ['Google AI/ML', 'Google Android Development'],
  },
];

const achievements = [
  {
    title: 'NCC Certificate – CPL Rank',
    description: 'Awarded NCC certificate with the rank of Corporal (CPL), showcasing leadership, discipline, and service.',
    project: 'Completed NCC training and fulfilled all required activities.',
    certificateLink: 'https://drive.google.com/file/d/1wShB8tgdhzT4cKUQKoC1NFTvdBOkE-Wl/view'
  },
  {
    title: 'National-Level NCC Camp Participant – Maharashtra',
    description: 'Participated in a National-Level NCC (Army) Camp held in Maharashtra, representing my unit.',
    project: 'Demonstrated teamwork, discipline, and national service during the camp.',
    certificateLink: 'https://drive.google.com/file/d/1Nf2TpWai-4Etc1-UC2u2JdBgInYhcSih/view'
  },
  {
    title: 'ALTIUS 25 – Certificate of Excellence',
    description: 'Secured II place in the WebWave event during ALTIUS 25, a college-level Technical & Non-Technical fest.',
    project: 'Recognized for outstanding performance in the WebWave competition.',
    certificateLink: 'https://drive.google.com/file/d/1KeijCAz98ts140yCCs6YiRG6XKW1S5oN/view'
  },
];



const leadership = [
  {
    role: 'Student Placement Coordinator',
    description: 'Assisted in placement drives and guided peers in coding preparation',
  },
  {
    role: 'Joint Secretary (ASCEE)',
    description: 'Led hackathons and workshops for 300+ participants, boosting engagement by 40%',
  },
  {
    role: 'Hackathon Organizer',
    description: 'Organized "Codeathon" with 80 dual-member teams, promoting innovation and teamwork',
  },
];

export function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-32 relative" id="highlights">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-16 text-gradient tracking-tight"
          >
            Highlights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <Card className="glass h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Award className="w-7 h-7 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {certGroups.map((group, idx) => (
                      <div key={idx} className="p-4 glass rounded-lg border border-primary/20">
                        <h4 className="font-display font-semibold text-lg mb-3">{group.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="px-3 py-1.5 glass border-primary/30 hover:border-primary/70 transition-colors"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <Card className="glass h-full glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Trophy className="w-7 h-7 text-accent" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-background/40 rounded-lg border border-accent/30">
                      <h3 className="font-display font-semibold text-lg mb-2 text-accent">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
                      <p className="text-sm mb-3">{achievement.project}</p>
                      {achievement.certificateLink && (
                        <a href={achievement.certificateLink} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="glass border-accent/50 hover:border-accent">
                            View Certificate
                          </Button>
                        </a>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Leadership */}
          <motion.div variants={itemVariants}>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-7 h-7 text-secondary" />
                  Leadership Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {leadership.map((item, index) => (
                    <div key={index} className="p-4 glass rounded-lg">
                      <h3 className="font-display font-semibold text-lg mb-2">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
