import { BaseClient, Issuer } from "openid-client";

// const test = async function () {
//   const googleIssuer: Issuer<BaseClient> = await Issuer.discover("https://steamcommunity.com/openid/");
//   console.log("Discovered issuer %s %O", googleIssuer.issuer, googleIssuer.metadata);
// };
// test();

export class OpenidConnectService {
  async createClient() {
    // const googleIssuer: Issuer<BaseClient> = await Issuer.discover("https://steamcommunity.com/openid/");
    const googleIssuer: Issuer<BaseClient> = await Issuer.discover("https://accounts.google.com");
    console.log("Discovered issuer %s %O", googleIssuer.issuer, googleIssuer.metadata);
    return "Discovered issuer %s %O" + googleIssuer.issuer + googleIssuer.metadata;
  }
}
