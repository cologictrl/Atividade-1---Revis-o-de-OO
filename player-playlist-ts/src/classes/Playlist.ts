// src/classes/Playlist.ts
import { Video } from "./Video";

export class Playlist {
  private videos: Video[] = [];

  constructor(videos: Video[] = []) {
    this.videos = videos;
  }

  public addVideo(video: Video): void {
    this.videos.push(video);
    console.log(`✅ Vídeo adicionado: ${video.info()}`);
  }

  public removeVideo(index: number): void {
    if (index >= 0 && index < this.videos.length) {
      const removedVideo = this.videos.splice(index, 1)[0];
      if (removedVideo) {
        console.log(`❌ Vídeo removido: ${removedVideo.info()}`);
      }
    } else {
      console.log(`❌ Erro: Índice de vídeo inválido.`);
    }
  }

  // A alteração mais segura é aqui, garantindo o retorno explícito.
  public getVideo(index: number): Video | null {
    if (index >= 0 && index < this.videos.length) {
      // O TypeScript agora entende que dentro desse if,
      // o valor é certamente um `Video`.
      return this.videos[index];
    }
    // Fora do if, o valor é null.
    return null;
  }

  public get totalVideos(): number {
    return this.videos.length;
  }
}
