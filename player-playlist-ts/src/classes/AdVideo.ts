import { Video } from "./Video"; // Corrigido para "./Video"

export class AdVideo extends Video {
  private _sponsor: string;

  constructor(title: string, duration: number, sponsor: string) {
    super(title, duration);
    this._sponsor = sponsor;
  }

  public play(): void {
    console.log(
      `▶️ Anúncio do ${this._sponsor}: ${this._title} (Duração: ${this._duration}s)`
    );
  }

  public info(): string {
    return `${this._title} (Anúncio de ${this._sponsor})`;
  }

  public get sponsor(): string {
    return this._sponsor;
  }
}
