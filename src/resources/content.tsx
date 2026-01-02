import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "James",
  lastName: "Emmanuel Tobi",
  name: `James E. Tobi`,
  role: "Social Media Manager & Creative Strategist",
  avatar: "/images/IMG_3647_082846.jpg",
  email: "jamestobiloba500@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", ""], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on social media growth, creativity, and digital strategy</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I help brands grow through strategy, design & motion</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">James Tobi</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm James E. Tobi, a Social Media Manager and Creative Strategist. I specialize in <Text as="span" weight="strong">faceless reels</Text>, motion design, high-quality visuals,  
      and creative Ads that drive traffic and sales.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a results-driven Social Media Manager with strong creative and technical skills.
        I help brands communicate clearly, grow consistently, and convert attention into
        measurable outcomes using strategy, design, video, and paid advertising.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Client Experience",
    experiences: [
      {
        company: "Koinonia Consult",
        timeframe: "2024 – Present",
        role: "Social Media Manager",
        achievements: [
          <>
            Planned and designed educational content around Data Governance and Data Management.
          </>,
          <>
            Improved brand consistency and audience engagement through structured content strategy.
          </>,
          <>
            Run Advertisements that draws Traffic and boost brand visibility.
          </>,
          <>
            Worked on Faceless Videos using Story telling to draw viewrs attention and create expectation for weekly posts.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Victory Assembly Sheffield",
        timeframe: "2024 – Present",
        role: "Creative Designer",
        achievements: [
          <>
            Designed church flyers, service promotions, and social media visuals.
          </>,
          <>
            Maintained brand clarity across digital platforms.
          </>,
        ],
        images: [],
      },
    ],
  },
  {
  company: "Naija Wear Hub",
        timeframe: "2024 – Present",
        role: "Creative & Ads Support",
        achievements: [
          <>
            Created fashion visuals and promotional graphics.
          </>,
          <>
            Supported traffic and sales through ad creatives.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "D'cious Academy Skill Hub (DASH)",
        description: <>Studied Social Media Management.</>,
      },
      {
        name: "Edexcel University",
        description: <>Studied Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core Skills",
    skills: [
      {
        title: "Social Media Management",
        description: (
          <>Content planning | Posting | Analytics | and Audience Growth.</>
        ),
        tags: [
          {
            name: "Strategy",
            icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Motion Design & Video",
        description: (
          <>Faceless reels, motion graphics, and short-form video editing.</>
        ),
        tags: [
          {
            name: "motion",
            icon: "play",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Design & Ads",
        description: (
          <>High-quality graphics and performance-driven ad creatives.</>
        ),
        tags: [
          {
            name: "Design",
            icon: "figma",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
