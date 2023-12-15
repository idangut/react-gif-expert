import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Tests in <GifItem />", () => {
  const title = "Resident Evil";
  const url = "https://resident-evil/claire.png";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the inidicated URL and ALT", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
