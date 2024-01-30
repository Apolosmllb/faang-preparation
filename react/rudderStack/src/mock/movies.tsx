export type MovieType = {
  id: number;
  title: string;
  description: string;
  year: number;
  rating: number;
  poster: string;
  tag: string;
  URL: string;
};

export const movies: MovieType[] = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    year: 2010,
    rating: 8.8,
    tag: "Documentary",
    poster: "inception_poster.jpg",
    URL: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: 1994,
    rating: 9.3,
    tag: "Music",
    poster: "shawshank_redemption_poster.jpg",
    URL: "https://images.unsplash.com/photo-1608533371942-daebef51bc40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2008,
    rating: 9,
    tag: "Drama",
    poster: "dark_knight_poster.jpg",
    URL: "https://images.unsplash.com/photo-1539481915544-f5cd50562d66?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    year: 1994,
    rating: 8.9,
    tag: "Drama",
    poster: "pulp_fiction_poster.jpg",
    URL: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    year: 1972,
    rating: 9.2,
    tag: "Music",
    poster: "godfather_poster.jpg",
    URL: "https://images.unsplash.com/photo-1539481915544-f5cd50562d66?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    year: 1994,
    rating: 8.8,
    tag: "Documentary",
    poster: "forrest_gump_poster.jpg",
    URL: "https://images.unsplash.com/photo-1608533371942-daebef51bc40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    year: 1999,
    rating: 8.8,
    tag: "Drama",
    poster: "fight_club_poster.jpg",
    URL: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    year: 1999,
    rating: 8.7,
    tag: "Drama",
    poster: "matrix_poster.jpg",
    URL: "https://images.unsplash.com/photo-1608533371942-daebef51bc40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    year: 2003,
    rating: 8.9,
    tag: "Music",
    poster: "lotr_return_of_the_king_poster.jpg",
    URL: "https://images.unsplash.com/photo-1539481915544-f5cd50562d66?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Goodfellas",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    year: 1990,
    rating: 8.7,
    tag: "Documentary",
    poster: "goodfellas_poster.jpg",
    URL: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
