import axios from 'axios';

export class YouTubeService {
    // configuration
    url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
    
    getVideosFromApi(searchTerm, related) {
      var options={
              // channelId : 'UC2Lg_JM84ehrW4bs85SWtLw',
              maxResults :20,
              key: '',
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
