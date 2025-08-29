import { IPlayable } from "../interfaces/IPlayable";

export class Video implements IPlayable {
  protected _title: string;
  protected _duration: number; // Duração em segundos

  constructor(title: string, duration: number) {
    this._title = title;
    this._duration = duration;
  }

  public play(): void {
    console.log(`▶️ Tocando: ${this._title} (${this._duration}s)`);
  }

  public info(): string {
    return `${this._title} (${this._duration}s)`;
  }

  public get title(): string {
    return this._title;
  }
}
