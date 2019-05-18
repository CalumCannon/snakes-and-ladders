const baseURL = 'http://localhost:3000/api/players/';

export default {
  getPlayers(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postPlayers(newplayer) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(newplayer),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deletePlayers(id){
    return fetch(baseURL + id,{
      method:'DELETE'
    })
  },
  updatePlayer(id, details){
    return fetch(baseURL + id,{
      method: 'PUT',
      body: JSON.stringify(details),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
};
