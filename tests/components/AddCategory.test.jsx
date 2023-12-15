import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Tests in <AddCategory />", () => {
  const inputValue = "Claire";

  test("Should change the value of the text box", () => {
    render(<AddCategory onAddCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe("Claire");
    // screen.debug();
  });

  test("should call onAddCategory if the input has a value", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);

    // screen.debug();
  });

  test("should not call onAddCategory if the input is empty", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
