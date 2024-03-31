import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as Constants from '@/constants'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import dummyImg1 from '@assets/imgs/dummy-img-1.jpg';
import dummyImg2 from '@assets/imgs/dummy-img-2.jpg';

type Props = {
  className: string;
};

export function HomeProjects({ className }: Props) {
  const tabs = [
    { label: 'Latest', value: 'latest' },
    { label: 'Others', value: 'others' },
  ];
  const projects = [
    {
      isLatest: true,
      title: 'E-Commerce',
      description:
        'The e-commerce project is a web platform that facilitates online buying and selling, providing users with a diverse marketplace to explore products, make purchases, and manage transactions.',
      badges: ['React', 'MongoDB', 'TailwindCSS'],
      img: dummyImg1,
    },
    {
      isLatest: true,
      title: 'Neflix Clone',
      description:
        'The Netflix clone project is a web application that closely resembles Netflix interface, enabling users to browse, view details, and stream movies and TV shows seamlessly.',
      badges: ['React', 'MongoDB', 'TailwindCSS'],
      img: dummyImg2,
    },
    {
      title: 'Employee Management System',
      description:
        'The employee management system is a digital tool that helps businesses handle employee data, track attendance, and manage schedules efficiently.',
      badges: ['React', 'MongoDB', 'TailwindCSS'],
      img: dummyImg1,
    },
    {
      title: 'Employee Management System',
      description:
        'The employee management system is a digital tool that helps businesses handle employee data, track attendance, and manage schedules efficiently.',
      badges: ['React', 'MongoDB', 'TailwindCSS'],
      img: dummyImg1,
    },
    {
      title: 'Employee Management System2',
      description:
        'The employee management system is a digital tool that helps businesses handle employee data, track attendance, and manage schedules efficiently.2',
      badges: ['React', 'MongoDB', 'TailwindCSS'],
      img: dummyImg1,
    },
  ];

  const fadeUpAnimation = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: 'easeInOut' },
    viewport: { once: true },
  };

  return (
    <div className={cn(className)} id={Constants.PROJECTS}>
      <h3 className="text-center mb-4">Projects</h3>

      <Tabs defaultValue={tabs[0].value}>
        <TabsList className="grid w-full grid-cols-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="latest">
          <div className="mt-4 flex flex-col align-center justify-center gap-4 md:flex-row">
            {projects
              .filter((project) => project.isLatest)
              .map((project) => (
                <motion.div {...fadeUpAnimation} className="flex-1" key={project.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center">
                        <img  src={project.img} className="max-w-full w-full lg:w-10/12 rounded-md" />
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                      <div className="mt-3">
                        <Button className="!p-0" variant="link">
                          <p className="mr-1">Demo</p>
                          <Icon name="ExternalLink" />
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {project.badges.map((badge) => (
                          <Badge key={badge}>{badge}</Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="others">
          <ScrollArea className="mt-4" style={{ height: '480px' }}>
            <div className="flex flex-col align-center justify-center gap-4 md:flex-row">
              {projects
                .filter((project) => !project.isLatest)
                .map((project, i) => (
                <motion.div {...fadeUpAnimation} className="flex-1" key={i}>

                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center">
                        <img src={project.img} className="max-w-full w-full lg:w-10/12 rounded-md" />
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                      <div className="mt-3">
                        <Button className="!p-0" variant="link">
                          <p className="mr-1">Demo</p>
                          <Icon name="ExternalLink" />
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {project.badges.map((badge) => (
                          <Badge key={badge}>{badge}</Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                  </motion.div>
                ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
