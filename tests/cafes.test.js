import cafes from "../public/cafes.json";

describe("Cafe JSON data", () => {
  test("should be an array", () => {
    expect(Array.isArray(cafes)).toBe(true);
  });

  test("each cafe has required fields", () => {
    cafes.forEach((cafe) => {
      expect(cafe).toHaveProperty("id");
      expect(cafe).toHaveProperty("name");
      expect(cafe).toHaveProperty("lat");
      expect(cafe).toHaveProperty("lng");
    });
  });
});
