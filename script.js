/* 
  주석은 웬만하면 레포에 안 올리는게 좋습니다.
  필요없는 주석이라면 삭제하고 올리시고, 
  필요한 주석이라면 일부 내용만 올리시던가 아니면 stash 기능을 이용해 내용을 저장해보세요.
  
  앗 제가 저장하니까 format이 저장됩니다.

  원활한 코드리뷰를 위해 vscode의 확장프로그램 중 Prettier 설치 후 
  vscode 설정에서 format on save 클릭 및 기본 formatter prettier로 적용해주세요!
*/
// fetch(
//   'https://api.themoviedb.org/3/movie/550?api_key=8e8173ce68a621d89b5849b20c8930ff'
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://api.themoviedb.org/3/movie/550?api_key=8e8173ce68a621d89b5849b20c8930ff', {
//   method : 'POST',
//   headers : {'Content-Type' : 'application/json'},
//   body: JSON.stringify()
// })

const testTitle = document.querySelector("#test");

//TMDB Movie List - Popular
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    /*
     * 토큰 정보는 깃헙에 올리시면 안됩니다!
     * 지금은 돈 나가는 것도 아니라서 큰 상관은 없겠지만은...
     * 나중에 언젠가 AWS 서버 토큰 사용할 때는 주의해주세요 :)
     */
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTgxNzNjZTY4YTYyMWQ4OWI1ODQ5YjIwYzg5MzBmZiIsIm5iZiI6MTczNjMxNDY2Mi42ODQsInN1YiI6IjY3N2UwZjI2MjE4ZmQ1N2FjZjRlNTc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UplQK5NQAiCLPzUCZqyZy0gueCx_R7Q6NPzHT1oIYtE",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((res) => res.json())
  .then((res) => {
    const resResults = res["results"];
    for (let i = 0; i < resResults.length; i++) {
      /* 콘솔 로그도 삭제 부탁드립니다! :) */
      console.log(resResults[i].title);
      testTitle.innerHTML = `<p>${resResults[i].title}</p>`;
    }
  })
  .catch((err) => console.error(err));

/* 밑의 옵션도 필요 없어보입니당! */
options["title"];
