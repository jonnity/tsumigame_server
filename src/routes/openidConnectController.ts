import { JsonController, Get, QueryParams, Param } from "routing-controllers";
import { IsInt, IsOptional } from "class-validator";

import { OpenidConnectService } from "../service/openidConnectService";

@JsonController()
export class OpenidConnectController {
  private openidConnectService: OpenidConnectService = new OpenidConnectService();

  @Get("/auth")
  async steamLogin() {
    return await this.openidConnectService.createClient();
  }
}
