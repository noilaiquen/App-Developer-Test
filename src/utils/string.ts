export function getRemoteImageSrc(imageName: string) {
  return `https://image.tmdb.org/t/p/w440_and_h660_face/${imageName}`;
}

export function getMovieDuration(runtime: number = 0): String {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}
