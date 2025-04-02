import { Director } from "../models/Director";
import { Movie } from "./Movie";

describe("Movie tests", () => {
  const director: Director<string> = {
    name: "Stanley Kubrick",
    age: 50,
    data: "Great director",
  };

  const movie: Movie = new Movie("La Naranja Mecánica", 100, true, director);

  it("title should be La Naranja mecánica", () => {
    expect(movie.title).toBe("La Naranja Mecánica");
  });

  it("duration should be 100", () => {
    expect(movie.getDuration()).toBe(100);
  });

  it("should get 1h 40m", () => {
    expect(movie.getHoursMinutes()).toBe("1h 40m");
  });
});
