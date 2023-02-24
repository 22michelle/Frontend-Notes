import { v4 as uuidv4 } from "uuid";

export const notes = [
  {
    _id: uuidv4(),
    title: "Book a Ticket for Movie",
    date: new Date(),
    description:
      "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
    category: "Important",
  },

  {
    _id: uuidv4(),
    title: "Go for lunch",
    date: new Date(),
    description:
      "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
    category: "Business",
  },

  {
    _id: uuidv4(),
    title: "Meeting with Mr.Jojo",
    date: new Date(),
    description:
      "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
    category: "Social",
  },

  {
    _id: uuidv4(),
    title: "Give Review for design",
    date: new Date(),
    description:
      "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
    category: "Business",
  },
];

export const categories = ["All Categories", "Business", "Social", "Important"];
