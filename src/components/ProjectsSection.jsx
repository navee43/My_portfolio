import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quick Compare",
    description: "A smart platform that helps users compare prices of products across multiple online stores in one place, making it easy to find the best deals, save money, and shop smarter.",
    image: "/projects/priceCompare.png",
    tags: ["Html", "CSS", "Javascript","nodeJs"],
    demoUrl: "https://price-comparison-website-chi.vercel.app/index.html",
    githubUrl: "https://github.com/navee43/Price_comparison_website",
  },
  {
    id: 2,
    title: "Chad Chat",
    description:
      "A real-time messaging app that lets users connect instantly, create groups, share files, and stay connected anytime, anywhere.",
    image: "/projects/chatApp.png",
    tags: ["reactJs", "TailwindCss", "NodeJs", "Socket.io" , "MongoDb","expressJs"],
    demoUrl: "https://chat-app-frontend-food.onrender.com/",
    githubUrl: "https://github.com/navee43/chat_app",
  },
  {
    id: 3,
    title: "Gomino",
    description:
      "A convenient app that lets users explore food, order their favorite meals, and get fast doorstep delivery anytime.",
    image: "/projects/foodDel.png",
    tags: ["TailwindCss", "typescript", "nextjs" ,"Razorpay"],
    demoUrl: "https://food-del-website-git-main-naveens-projects-46810f19.vercel.app/",
    githubUrl: "https://github.com/navee43/food_del_website",
  },
    {
    id: 4,
    title: "Alumni Connect",
    description:
      "Alumni Connect is a platform that brings former students together to network, share opportunities, and stay engaged with their alma mater. It fosters mentorship, career growth, and lasting connections among alumni and current students",
    image: "/projects/alumni.png",
    tags: ["TailwindCss", "javascript", "reactjs" ,"nodejs","mongodb"],
    demoUrl: "#",
    githubUrl: "https://github.com/navee43/alumni_student_network_project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/navee43"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
