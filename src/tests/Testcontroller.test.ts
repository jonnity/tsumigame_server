import { TestController } from "../routes/testController";

describe("testController", () => {
  test("ใในใ", () => {
    expect(new TestController().test()).toBe("test");
  });
});
