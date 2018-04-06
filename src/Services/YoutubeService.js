import axios from 'axios';

export class YouTubeService {
    // configuration
    url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
    
    getVideosFromApi(searchTerm, related, nextPage) {
      var options={
             maxResults :10,
              key: 'AIzaSyDaKQ5Wk5C4KLF81e8L2uD6kjOamlFYxn0',
              type:'video'
          }
      if(related){
        options.relatedToVideoId = searchTerm;
      }
      if(nextPage) {
        options.pageToken= nextPage;
      }
          return axios.get(
            this.url+searchTerm,{params:options}
          ).then((result) => { 
            return result.data; });
      }
}
