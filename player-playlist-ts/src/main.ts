import { Video } from "./classes/Video";
import { AdVideo } from "./classes/AdVideo";
import { LiveStream } from "./classes/LiveStream";
import { Playlist } from "./classes/Playlist";
import { Player } from "./classes/Player";

console.log("=====================================");
console.log("     Iniciando a simulação do Player");
console.log("=====================================\n");

const video1 = new Video("A Viagem ao Desconhecido", 300);
const video2 = new AdVideo("Anúncio do Produto X", 30, "Empresa Genérica");
const video3 = new LiveStream("Show ao Vivo da Banda Y");
const video4 = new Video("Tutorial de Cozinha Rápida", 600);
const video5 = new Video("Documentário sobre a natureza", 900);

const minhaPlaylist = new Playlist();
minhaPlaylist.addVideo(video1);
minhaPlaylist.addVideo(video2);
minhaPlaylist.addVideo(video3);
minhaPlaylist.addVideo(video4);
minhaPlaylist.addVideo(video5);

const meuPlayer = new Player(minhaPlaylist);

console.log("\n--- SIMULAÇÃO DE NAVEGAÇÃO ---\n");
meuPlayer.play();
meuPlayer.next();
meuPlayer.next();
meuPlayer.previous();
meuPlayer.pause();
meuPlayer.play();

console.log("\n--- TESTANDO MODOS E HISTÓRICO ---\n");
meuPlayer.toggleShuffle();
meuPlayer.next();
meuPlayer.next();
meuPlayer.next();

console.log("\n--- HISTÓRICO DE VÍDEOS ---\n");
const historico = meuPlayer.getHistory();
console.log("Vídeos assistidos:");
historico.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

console.log("\n=====================================");
console.log("     Fim da simulação do Player");
console.log("=====================================");
