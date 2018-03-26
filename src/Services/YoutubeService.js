import axios from 'axios';

export class YouTubeService {
    // configuration
    url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
    
    getVideosFromApi(searchTerm, related) {
      var options={
             maxResults :10,
              key: 'here-goes-your-token',
              type:'video'
          }
      if(related){
        options.relatedToVideoId = searchTerm;
      }
          return axios.get(
            this.url+searchTerm,{params:options}
          ).then((result) => { 
            return result.data; });
      }
}
