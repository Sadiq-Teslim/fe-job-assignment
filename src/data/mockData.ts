// src/data/mockData.ts

export interface Author {
  name: string;
  avatarUrl: string; // Small icon for publication/author
}

export interface Article {
  id: number;
  author: Author;
  publication: string;
  title: string;
  subtitle: string;
  date: string;
  claps: string;
  comments: number;
  imageUrl: string;
  clappedBy?: string;
}

export interface StaffPickArticle {
  id: number;
  author: Author;
  title: string;
  date: string;
}

export interface UserToFollow {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
}

// News-style Unsplash images
export const articles: Article[] = [
  {
    id: 1,
    author: {
      name: "Bonben",
      avatarUrl:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=48&h=48",
    },
    publication: "in Language Lab",
    title:
      "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
    subtitle: "It's not a skill issue, but a marketing issue",
    date: "5d ago",
    claps: "1.2K",
    comments: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    author: {
      name: "Attila Vágó",
      avatarUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=48&h=48",
    },
    publication: "in Level Up Coding",
    title: "Welcome To Dream-Driven Development Where Nothing Works",
    subtitle:
      "Half-baked diagrams, features that make no sense, Mikado architecture. You’ve seen it, you’ve lived it, and it has a name...",
    date: "4d ago",
    claps: "709",
    comments: 16,
    imageUrl:
      "./mid-image.jpg",
    clappedBy: "Trey Huffine",
  },
  {
    id: 3,
    author: {
      name: "Iswarya writes",
      avatarUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=48&h=48",
    },
    publication: "in Predict",
    title:
      "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
    subtitle:
      "What if I told you that by this time next year, you could land a job that pays over $100,000—and it won’t be threatened by AI?",
    date: "Jul 30",
    claps: "3.7K",
    comments: 165,
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    author: {
      name: "Clean Compiler",
      avatarUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=48&h=48",
    },
    publication: "",
    title: "10 Java Collections Tricks Only Seniors Know",
    subtitle:
      "If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing: most...",
    date: "3d ago",
    claps: "52",
    comments: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    author: {
      name: "Jim the AI Whisperer",
      avatarUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=48&h=48",
    },
    publication: "in The Generator",
    title:
      "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
    subtitle:
      "Limiting output length reveals AI isn’t intelligent—it’s chatty!",
    date: "3d ago",
    claps: "2K",
    comments: 36,
    imageUrl:
      "./gpt-logo.png",
  },
];

export const staffPicks: StaffPickArticle[] = [
  {
    id: 1,
    author: {
      name: "Zulie @ Medium",
      avatarUrl:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=48&h=48",
    },
    title:
      "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
    date: "2d ago",
  },
  {
    id: 2,
    author: {
      name: "Jud Brewer MD PhD",
      avatarUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=48&h=48",
    },
    title:
      'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
    date: "5d ago",
  },
  {
    id: 3,
    author: {
      name: "Linh Nguyen",
      avatarUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=48&h=48",
    },
    title: "Golden Design Lessons from Tokyo Metro",
    date: "Sep 3",
  },
];

export const topics: string[] = [
  "Data Science",
  "React",
  "Coding",
  "Mental Health",
  "UX",
  "Python",
  "Productivity",
];

export const usersToFollow: UserToFollow[] = [
  {
    id: 1,
    name: "Dr. Derek Austin",
    bio: "AI Content Engineer. I teach LLMs to think. Full...",
    avatarUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=48&h=48",
  },
  {
    id: 2,
    name: "ITNEXT",
    bio: "ITNEXT is a platform for IT developers & software...",
    avatarUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=48&h=48",
  },
  {
    id: 3,
    name: "Oliver Foster",
    bio: "Primarily proficient in the Java programming...",
    avatarUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=48&h=48",
  },
];
