import styled from 'styled-components';

export const Container = styled.div`
  
  .pageLanding{
    z-index: -1;
  }
  .main{
    width: 100%;
    height: 100vh;
    /* background-image: url('/img/bg.jpg'); */
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  .Header{
    position: fixed;
    width: 100%;
    height: 5rem;
    //position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    nav{
      ul{
        list-style: none;
        display: flex;
        align-items: center;
        li{
          padding-right: 1rem;
          a{
            text-decoration: none;
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2rem;
            color: black;
            font-weight: 600;
            text-transform: uppercase;
          }
          a:hover{
            cursor: pointer;
          }
        }
        li+li{
          padding-right: 5rem;
        }
      }
    }
  }
  .main_introduction{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main_introduction_title{
      
      h1{
        font-family: 'Sansita Swashed', sans-serif;
        font-weight: 500;
        font-size: 6rem;
      }
    }
    .main_introduction_arrow{
      transition: .2s;
      position: absolute;
      margin-top: 500px;
      cursor: pointer;
      a{
        transition: all ease .2s;
      }
    }

  }
  .arrowButton:hover{
    cursor: pointer;
  }
  
  .main_content{
    transition: .2s;
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: 1.8fr 1.1fr 1.1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text1 photo1 photo2" "text1 photo3 photo4";
    gap: 45px 15px;
    width: 100%;
    height: 100vh;
    background: #ebebeb;
    padding: 80px 2rem 100px; 
    
  }
  .main_content1{
    //width: calc((100% / 2) - 15px);
    width: 100%;
    height: 100%;
    grid-area: photo1;
    /* background-image: url('/img/content1.jpg'); */
    background-position: center;
    background-color: white;
    background-size: cover;
    margin-bottom: 20px;
  }
  .main_content2{
    width: 100%;
    height: 100%;
    grid-area: photo2;
    /* background-image: url('/img/content2.jpg'); */
    background-position: center;
    background-color: white;
    background-size: cover;
  }
  .main_content3{
    width: 100%;
    height: 100%;
    grid-area: photo3;
    /* background-image: url('/img/content3.jpg'); */
    background-position: center;
    background-color: white;
    background-size: cover;
  }
  .main_content4{
    width: 100%;
    height: 100%;
    grid-area: photo4;
    /* background-image: url('/img/content4.jpg'); */
    background-position: center;
    background-color: white;
    background-size: cover;
  }
  .main_content_text{
    padding: 0 0 0 2rem;
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    grid-area: text1;
    h1{
      font-family: 'Sansita Swashed';
      font-weight: 500;
      font-size: 3rem;
      padding-bottom: 5rem;
    }
    .main_content_content{
      p{
        font-family: 'Opens Sans', sans-serif;
        font-size: 1.4rem;
        max-width: 85%;
      }
    }
  }
  .main_content_button{
    margin: 5rem 0;
    a{
      text-decoration: none;
      color: white;
      font-family: 'Open Sans', sans-serif;
      padding: 1rem;
      background-color: black;
      cursor: pointer;
    }
  }
  .main_footer{
    width: 100%;
    height: 100vh;
    background: #a8a8a8;
  }
  
  .slider1{
    height: 90vh;
    width: 90vw;
    background-position: center;
    background-size: cover;
  }
  .slider2{
    height: 90vh;
    width: 90vw;
    background-position: center;
    background-size: cover;
  }
  .slider3{
    height: 90vh;
    width: 90vw;
    background-position: center;
    background-size: cover;
  }
  .each-slide{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }
  .default-nav{
    margin: 0;
    position: absolute;
  }

`;