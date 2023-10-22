// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAVD9nHoa54ckvdl5ZdzHq1OTsOciHm-UpRKrXDo9-iRPS3yAwnvoBe720gOxsovpfuzBz_LUvgHqG8ww2keH5L4hDGs3RRJTcSa557eM5GZ0fY0DUrM32uRTq2dvKKLIeAH84x-ii29uOkirLi_wTfHvzgvkexxuSTfrCbApd3mH5SpowdTyt7JIOJtCu3dA_PXszRxyhsqk7Suv-aZx02i2CPyDiLs4ortq6HqJKModAl-2xLuBJJmWYmW2hVfQ';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);