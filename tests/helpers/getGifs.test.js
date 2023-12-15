import { fetchGifs } from "../../src/helpers/getGifs";

describe("Tests in fetchGifs()", () => {
  test("Should return an array of gifs", async () => {
    const gifs = await fetchGifs("Resident evil");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
