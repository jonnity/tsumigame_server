import { TestService } from "../service/testService";

describe("testService", () => {
  test("ใในใ", () => {
    const testService: TestService = new TestService("hello");
    expect(testService.greet()).toBe("hello");
  });
});
