import { render, screen, fireEvent } from "@testing-library/react";
import CafeList from "../src/components/CafeList";

const mockCafes = [
  { id: 1, name: "Cafe Aroma", lat: 28.6, lng: 77.2 },
  { id: 2, name: "Bean & Brew", lat: 28.61, lng: 77.21 }
];

describe("CafeList Component", () => {
  test("renders cafe names", () => {
    render(<CafeList cafes={mockCafes} onSelect={() => {}} />);
    
    expect(screen.getByText("Cafe Aroma")).toBeInTheDocument();
    expect(screen.getByText("Bean & Brew")).toBeInTheDocument();
  });

  test("clicking a cafe calls onSelect", () => {
    const mockFn = vi.fn();
    render(<CafeList cafes={mockCafes} onSelect={mockFn} />);
    
    fireEvent.click(screen.getByText("Cafe Aroma"));
    expect(mockFn).toHaveBeenCalledWith(mockCafes[0]);
  });
});
