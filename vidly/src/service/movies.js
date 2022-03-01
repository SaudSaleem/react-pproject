const movies = [
  {
    _id: "gvsg456789",
    title: "Terminator",
    genre: { _id: "1234567890A", type: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "12-12-2020",
    liked: true,
  },
  {
    _id: "gvdssg456789",
    title: "Terminator1",
    genre: { _id: "1234567890T", type: "Thriller" },
    numberInStock: 12,
    dailyRentalRate: 4.5,
    publishDate: "11-12-2020",
    liked: false,
  },
  {
    _id: "gvsdsg456789",
    title: "Terminator2",
    genre: { _id: "1234567890C", type: "Comedy" },
    numberInStock: 16,
    dailyRentalRate: 1.5,
    publishDate: "1-12-2022",
    liked: true,
  },
  {
    _id: "gvsdg456789",
    title: "Terminator3",
    genre: { _id: "1234567890A", type: "Action" },
    numberInStock: 88,
    dailyRentalRate: 3.5,
    publishDate: "19-12-2022",
    liked: true,
  },
  //
  {
    _id: "gvsg456sdasd3789",
    title: "Don",
    genre: { _id: "1234567890A", type: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "12-12-2020",
    liked: true,
  },
  {
    _id: "gvdssg4567ddass89",
    title: "Doremon",
    genre: { _id: "1234567890T", type: "Thriller" },
    numberInStock: 12,
    dailyRentalRate: 4.5,
    publishDate: "11-12-2020",
    liked: false,
  },
  {
    _id: "gsdvsdsg45das6789",
    title: "DWDL",
    genre: { _id: "1234567890C", type: "Comedy" },
    numberInStock: 16,
    dailyRentalRate: 1.5,
    publishDate: "1-12-2022",
    liked: true,
  },
  {
    _id: "gvsdg4567sda89ds",
    title: "Jannat",
    genre: { _id: "1234567890A", type: "Action" },
    numberInStock: 88,
    dailyRentalRate: 3.5,
    publishDate: "19-12-2022",
    liked: true,
  },
  //
  {
    _id: "gvsg45678sac9",
    title: "Peaky",
    genre: { _id: "1234567890", type: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "12-12-2020",
    liked: true,
  },
  {
    _id: "gvdsassg456789",
    title: "Blinders",
    genre: { _id: "1234567890", type: "Thriller" },
    numberInStock: 12,
    dailyRentalRate: 4.5,
    publishDate: "11-12-2020",
    liked: false,
  },
  {
    _id: "gvsdssag456789",
    title: "Terminator2",
    genre: { _id: "1234567890", type: "Comedy" },
    numberInStock: 16,
    dailyRentalRate: 1.5,
    publishDate: "1-12-2022",
    liked: true,
  },
  {
    _id: "gvsdg4567sa89",
    title: "Dhoom",
    genre: { _id: "1234567890", type: "Action" },
    numberInStock: 88,
    dailyRentalRate: 3.5,
    publishDate: "19-12-2022",
    liked: true,
  },
];
export function getMovies() {
  return movies;
}
