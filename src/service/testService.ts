export class TestService {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return this.message;
  }
}
