import { Video } from "./Video";

export class LiveStream extends Video {
  constructor(title: string) {
    super(title, -1);
  }

  public play(): void {
    console.log(`🔴 AO VIVO: ${this._title}`);
  }

  public info(): string {
    return `${this._title} (AO VIVO)`;
  }
}
