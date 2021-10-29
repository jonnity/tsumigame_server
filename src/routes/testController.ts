import { JsonController, Get, QueryParams, Param } from "routing-controllers";
import { IsInt, IsOptional } from "class-validator";

@JsonController()
export class TestController {
  message: string = "test";

  @Get("/test")
  test(): string {
    return this.message;
  }
}
