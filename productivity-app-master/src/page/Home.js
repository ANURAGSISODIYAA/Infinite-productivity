import Base from "../components/base";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody,CardImg,CardText,CardGroup, CardTitle, CardSubtitle, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import styles from "./MacBookAir1.module.css";
import goalSettingImage from './Home/goal_setting.png';
import template from "./Home/template.png";
import home from "./Home/home.jpg";
import bookreview from "./Home/productivity_book_review.png";
import productivityChallenges from "./Home/productivitychallenge.jpg";
import { Button } from "reactstrap";
import "./motivationquotes/quotes.css";
import "./motivationquotes/video.css";
const Home=()=>{
    return (
        <Base>
       <div className="rest reveal active">
      <div className="slider md:opacity-100 md:mt-1 mt-[5rem] h-max md:h-[35rem] bca mx-2">
        <div className="top h-8 text-black font-bold text-center hover:cursor-pointer hover:bg-orange-200">
          A place where Student can improve their habit and increase their productivity
        </div>
        <div className="d-flex flex-sm-row justify-content-between">
          <div className="left flex flex-col md:h-[40rem] bg-cover bg-no-repeat bg-center justify-center md:-ml-[4rem] md:p-[8rem] items-center aligns-center py-9">
            {/* gsap part */}
            <h1 className="md:text-7xl text-5xl m-5 ml-0 rounded-2xl p-2 text-center">
              <span className="md:text-9xl text-6xl font-[poppins]">W</span><b>ELCOME TO Infinite Productix</b>
            </h1>
            <div className="container w-50 h-5 font-serif m-5 ">
            <p className="text-lg ">Unleash your potential, streamline your tasks, and elevate your efficiency to new heights
          </p>
          <p>  Discover expert insights on productivity in our concise and insightful
          book reviews for enhanced efficiency.</p>
          </div>
          </div>
          <div className="right ">
            <img className="items-center md:p-10 p-4" src={home} alt="" />
          </div>
        </div>
      </div>
    </div>
    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={goalSettingImage}
      top
      width="50%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Goal Setting
      </CardTitle>

      <CardText>
      Goal setting is a fundamental and transformative practice that plays a crucial role in personal and professional development. It involves the process of defining clear and achievable objectives that provide direction and purpose in our lives. Whether in our careers, relationships, health, or personal growth, setting goals empowers us to articulate our aspirations and take intentional steps towards realizing them.
      </CardText>
      <button>Click here</button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={productivityChallenges}
      top
      width="50%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Productivity challenge
      </CardTitle>
     
      <CardText>
      Engaging in a productivity challenge can be a game-changer for individuals seeking to enhance their efficiency, time management, and overall effectiveness. These challenges are structured initiatives designed to motivate and encourage participants to accomplish more in a set period
      </CardText>
      <button>Click here</button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={bookreview }
      top
      width="50%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Productivity Book Review
      </CardTitle>
      <CardText>
      Reviewing a productivity book allows readers to reflect on the insights and strategies presented within its pages.
      </CardText>
      <button>Click here</button>
    </CardBody>
  </Card>
</CardGroup>


<div>
        <header>
        <h1>Motivational Quotes</h1>
    </header>
    <div class="quote-container">
        <p class="quote">"Believe you can and you're halfway there."</p>
        <p class="author">- Theodore Roosevelt</p>
    </div>
    <div class="quote-container">
        <p class="quote">"The only way to do great work is to love what you do."</p>
        <p class="author">- Steve Jobs</p>
    </div>
    <div class="quote-container">
        <p class="quote">"Productivity is being able to do things that you were never able to do before."</p>
        <p class="author">- Franz Kafka</p>
    </div>
    <div class="quote-container">
        <p class="quote">"You don't have to be great to start, but you have to start to be great."</p>
        <p class="author">- Zig Ziglar</p>
    </div>
    <div class="quote-container">
        <p class="quote">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.</p>
        <p class="author">- Steve Jobs</p>
    </div>
    <div class="quote-container">
        <p class="quote">"The least productive people are usually the ones who are most in favor of holding meetings." </p>
        <p class="author">- Thomas Sowell</p>
    </div>
    <div class="quote-container">
        <p class="quote">""Success usually comes to those who are too busy to be looking for it" </p>
        <p class="author">-  Henry David Thoreau</p>
    </div>

    </div>


    <div>
    <header>
        <h1>Self-Help Videos</h1>
    </header>
    <div class="video-container">
        <img class="video-thumbnail" width={500} src="https://img.youtube.com/vi/Qvcx7Y4caQE/maxresdefault.jpg" alt="Video 1 Thumbnail"/>
        <h2 class="video-title">Video 1: Overcoming Procrastination</h2>
        <a class="video-link" href="https://www.youtube.com/watch?v=Qvcx7Y4caQE" target="_blank">Watch Video</a>
    </div>
    <div class="video-container">
        <img class="video-thumbnail" width={500} src="https://img.youtube.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg" alt="Video 2 Thumbnail"/>
        <h2 class="video-title">Video 2: Building Self-Confidence</h2>
        <a class="video-link" href="https://www.youtube.com/watch?v=Ks-_Mh1QhMc" target="_blank">Watch Video</a>
    </div>
    <div class="video-container">
        <img class="video-thumbnail" width={500} src="https://img.youtube.com/vi/CthDGvOq4gA/maxresdefault.jpg" alt="Video 3 Thumbnail"/>
        <h2 class="video-title">Video 3: Stress Management Techniques</h2>
        <a class="video-link" href="https://youtu.be/grfXR6FAsI8?si=LNYmts84_O4li_m3" target="_blank">Watch Video</a>
    </div>

    </div>
    
    <footer>
    <h4>@copy; 2023 About Infinite Productix</h4>
            <p>
              Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
            </p>
    </footer>
      
    
        </Base>
    )}
export default Home;