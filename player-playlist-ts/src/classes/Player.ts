import { Playlist } from "./Playlist";
import { IPlayerControls } from "../interfaces/IPlayerControls";
import { Video } from "./Video";

export class Player implements IPlayerControls {
  private currentVideoIndex: number = 0;
  private isPlaying: boolean = false;
  private isLooping: boolean = false;
  private isShuffling: boolean = false;
  private history: Video[] = [];

  constructor(private playlist: Playlist) {}

  // A lógica de play() agora é apenas para iniciar a reprodução
  public play(): void {
    if (this.playlist.totalVideos === 0) {
      console.log("❌ A playlist está vazia.");
      return;
    }

    const currentVideo = this.playlist.getVideo(this.currentVideoIndex);
    if (currentVideo) {
      console.log("--- Player Status: PLAY ---");
      currentVideo.play();
      this.addToHistory(currentVideo);
      this.isPlaying = true;
    }
  }

  public pause(): void {
    if (this.isPlaying) {
      console.log("⏸️ Player Status: PAUSE");
      this.isPlaying = false;
    } else {
      console.log("▶️ O player não está tocando.");
    }
  }

  public stop(): void {
    if (this.isPlaying) {
      console.log("⏹️ Player Status: STOP");
      this.isPlaying = false;
      this.currentVideoIndex = 0;
    } else {
      console.log("⏹️ O player não está tocando.");
    }
  }

  // A lógica de navegação agora lida com o estado do player
  public next(): void {
    if (this.playlist.totalVideos === 0) {
      console.log("❌ A playlist está vazia.");
      return;
    }

    // Se o player estiver tocando, mude para o próximo vídeo
    if (this.isPlaying) {
      if (this.isShuffling) {
        this.currentVideoIndex = this.getRandomIndex();
      } else {
        this.currentVideoIndex =
          (this.currentVideoIndex + 1) % this.playlist.totalVideos;
      }
      console.log("⏭️ Próximo vídeo...");
      this.play();
    } else {
      console.log("▶️ O player não está tocando.");
    }
  }

  // A lógica de navegação agora lida com o estado do player
  public previous(): void {
    if (this.playlist.totalVideos === 0) {
      console.log("❌ A playlist está vazia.");
      return;
    }

    // Se o player estiver tocando, volte para o vídeo anterior
    if (this.isPlaying) {
      if (this.isShuffling) {
        this.currentVideoIndex = this.getRandomIndex();
      } else {
        this.currentVideoIndex =
          (this.currentVideoIndex - 1 + this.playlist.totalVideos) %
          this.playlist.totalVideos;
      }
      console.log("⏮️ Vídeo anterior...");
      this.play();
    } else {
      console.log("▶️ O player não está tocando.");
    }
  }

  public toggleLoop(): void {
    this.isLooping = !this.isLooping;
    console.log(`🔁 Modo loop: ${this.isLooping ? "ATIVADO" : "DESATIVADO"}`);
  }

  public toggleShuffle(): void {
    this.isShuffling = !this.isShuffling;
    console.log(
      `🔀 Modo aleatório: ${this.isShuffling ? "ATIVADO" : "DESATIVADO"}`
    );
  }

  private addToHistory(video: Video): void {
    this.history.push(video);
  }

  public getHistory(): string[] {
    return this.history.map((video) => video.info());
  }

  private getRandomIndex(): number {
    return Math.floor(Math.random() * this.playlist.totalVideos);
  }
}
