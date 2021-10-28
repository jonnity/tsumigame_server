import { TestService } from "../service/testService";

describe("testService", () => {
  test("テスト", () => {
    const testService: TestService = new TestService("hello");
    expect(testService.greet()).toBe("hello");
  });
});
