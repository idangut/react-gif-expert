import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

describe("tests in useFetchGifs hook", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Resident Evil"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return initial an array of gifs and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("Resident Evil"));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });
});
