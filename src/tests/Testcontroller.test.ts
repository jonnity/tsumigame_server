import { TestController } from "../routes/testController";

describe("testController", () => {
  test("テスト", () => {
    expect(new TestController().test()).toBe("test");
  });
});
