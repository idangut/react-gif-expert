import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
const category = "Metal Gear";

describe("tests in <GifGrid />", () => {
  test("should show loading first", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("should show items when gifs are loaded", () => {
    const gifs = [
      {
        id: "ABCDEF",
        title: "Metal Gear",
        url: "https//localhost/Snake",
      },
      {
        id: "12345",
        title: "Resident Evil",
        url: "https//localhost/Jill",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
