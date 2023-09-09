// GoalSettingApp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GoalSettingApp.css';
import './index.css';
import Base from '../components/base';


function GoalSettingApp() {
    const [showYourGuides, setShowYourGuides] = useState(true);
    const [showRecommendations, setShowRecommendations] = useState(false);
  
    const toggleContent = (content) => {
      if (content === 'yourGuides' && !showYourGuides) {
        setShowYourGuides(true);
        setShowRecommendations(false);
      } else if (content === 'recommendations' && !showRecommendations) {
        setShowYourGuides(false);
        setShowRecommendations(true);
      }
    };
  
    return (
      <Base>
      <div>
        <header>
          <h1>Welcome to Goal Setting and Planning Guides</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/about">About</Link></li>
              {/* <li><a href="/about">About</a></li> */}
              <li><a href="/guides">Guides</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <button id="yourGuidesBtn" onClick={() => toggleContent('yourGuides')}>
          Your Guides
        </button>
        <button id="recommendBtn" onClick={() => toggleContent('recommendations')}>
          Recommend
        </button>
  
        {showYourGuides ? (
          <main>
            <section id="featuredGuides">
              <h2>Featured Guides</h2>
              <ul>
                <li>Understanding the Importance of Goal Setting</li>
                <li>SMART Goals: Specific, Measurable, Achievable, Relevant, Time-Bound</li>
                <li>Breaking Down Long-Term Goals into Short-Term Milestones</li>
                <li>Creating a Visual Roadmap: Vision Boards and Goal Journals</li>
                <li>Overcoming Common Obstacles and Challenges</li>
              </ul>
            </section>
  
            <section id="recentArticles">
              <h2>Recent Articles</h2>
              <ul>
                <li>
                  Introduction
                  Setting goals is a crucial step towards achieving success and personal growth. In this guide, we
                  will explore the significance of goal setting and how it can positively impact various aspects
                  of your life.
                </li>
                <li>
                  Why Set Goals?
                  <ul>
                    <li>Clarity of Purpose
                      Setting clear and specific goals provides you with a sense of direction. It helps you define
                      what you want to achieve and creates a roadmap to reach your desired destination.
                    </li>
                    <li>Motivation and Focus
                      Goals give you a target to work towards, which can serve as a powerful motivator. They keep you
                      focused on tasks that align with your objectives, reducing distractions and increasing
                      productivity.
                    </li>
                    <li>Measure of Progress
                      Without goals, it's challenging to gauge your progress and assess your achievements. Setting
                      measurable goals allows you to track your development and celebrate your successes along the
                      way.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </main>
        ) : (
          <div id="recommend-container">
            <h2>Recommendations</h2>
            <p>Here are some recommended guides:</p>
            <ul>
              <li>Specific: Clearly define your goal.</li>
              <li>Measurable: Establish tangible criteria for tracking progress.</li>
              <li>Achievable: Ensure the goal is realistic and attainable.</li>
              <li>Relevant: Align the goal with your overall objectives.</li>
              <li>Time-Bound: Set a specific deadline for achieving the goal.</li>
            </ul>
          </div>
        )}
  </div>
      <footer>
      <h4>@copy; 2023 About Infinite Productix</h4>
            <p>
              Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
            </p>
    </footer>
      
      </Base>
    );
  }
  
  export default GoalSettingApp;