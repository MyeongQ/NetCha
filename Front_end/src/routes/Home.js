import ad1 from '../images/ad1.png';
import './Home.css';
import React from 'react';
import axios from "axios";
import Main from '../components/Main';
import Tops from '../components/Tops';
import UserStore from '../stores/UserStore';
import SubmitButton from '../components/Submitbutton';
import {observer} from "mobx-react";
import LoginButton from '../components/loginButton';
import Layout from '../components/Layout';
import Chat from '../components/Chat';


class Home extends React.Component {
  /*
   * State
   */
  state = {
    n_topMovies: [],
    w_topMovies: []
  };

  /*
   *  페이지 컴포넌트 생성
  */
  async componentDidMount(){
    /*
     * 데이터 fetch하기
    */
    const {
      data : {
        data : { movies }
      }// 사이트로부터 데이터 fetch
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  
    // fetch한 데이터를 state에 저장
    this.setState({n_topMovies : movies.slice(0,5)});
    this.setState({w_topMovies : movies.slice(5,10)});
  

    /*
     * 로그인 확인
    */
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accpet: "application/json",
          "Content-type" : "application/json",
        },
      });

      // res 데이터를 json 형태로 result에 저장
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLogged = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLogged = false;
      } 
    } catch(e) {
      UserStore.loading = false;
      UserStore.isLogged = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type" : "application/json",
        },
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

  /*
   *  페이지 렌더링 
  */
  render() {
    /*
     * state에 저장된 data를 topMovies에 전달
     */
    const n_topMovies = this.state.n_topMovies;
    const w_topMovies = this.state.w_topMovies;

    if (UserStore.loading) {
     return(
       <div className = "app">
         <div className="container">Loading, please wait...</div>
       </div>
     ); 
    } else {
      if(UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.username}
              <SubmitButton
                text={"Log Out"}
                disabled={false}
                onClick={() => this.doLogout()}
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div className="App">
        <Layout/>
        <div className="ad">
           <img src={ad1} alt="netflix" width="40%" height="50%" alt="netflix"/>
        </div>

        <Chat/>
          
        <Main/>
        
        <section className="list_container">
            
          <h1>AI가 전하는 NETFLIX TOP5</h1>
          <div className="netflix_movies">
            {
             n_topMovies.map(movie => (
                <Tops
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                />
               )
              )}
          </div>
          <br/>
          <h1>AI가 전하는 WATCHA TOP5</h1>
          <div className="watcha_movies">
            {
             w_topMovies.map(movie => (
               <Tops
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                />)
              )}
          </div>
        </section>   
      </div>
    );
  }
  
  
}



export default observer( Home );
