export function setPlayerItem(data) {
  localStorage.setItem("Player", JSON.stringify(data));
}

export function getPlayerItem() {
  const data = localStorage.getItem("Player");
  return JSON.parse(data);
}
