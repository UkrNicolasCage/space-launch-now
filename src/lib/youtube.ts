export const getVideo = async() => {
  const data = fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus&key=[YOUR_API_KEY]",{}
  );
}