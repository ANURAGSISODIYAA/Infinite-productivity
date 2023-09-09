import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../components/base';
import './GoalSettingApp.css';
import { Card} from 'reactstrap';

function AboutPage() {
  return (
    <Base>
    <div>
      <main>
        <section id="aboutContent">
          <h2>Introducing Infinite Productix</h2>
          <p>Your Ultimate Productivity Companion
Are you ready to supercharge your productivity and reclaim control over your tasks and time? Look no further than Infinite productivity, your all-in-one productivity app designed to help you achieve more, stress less, and unlock your full potential.
</p>
        </section>
        <Card>
          <h3>
          Why Infinite Productix?</h3>
<p>Infinite Productix is more than just a task manager; it's a comprehensive productivity toolkit tailored to your needs. Here's why you'll love it:</p>
<div>
  <ul>
    
    <h4>1. Task Management Made Simple</h4>
<p>Effortlessly create, organize, and prioritize tasks.
Set due dates, add notes, and categorize tasks for easy tracking.</p>
    
   
   <h4>2. Seamless Collaboration</h4>
<p>Collaborate with team members, family, or friends on shared projects.
Delegate tasks and stay in sync with real-time updates.
</p>
    
    
    <h4>3. Time Tracking and Analytics</h4>
<p>Gain insights into how you spend your time.
Analyze productivity trends to make data-driven decisions.
</p>
    

    <h4>4. Goal Setting and Progress Tracking</h4>

<p>Define your goals and break them into manageable tasks.
Celebrate your achievements as you make progress.
</p>

    <h4>5. Focus Mode</h4> 


<p>Minimize distractions with our built-in Focus Mode.
Boost your concentration and accomplish tasks more efficiently.
</p>
  
  
    <h4>7. Personalization</h4>

<p>Customize ProTask to fit your workflow and preferences.
Choose from various themes and layouts.
</p>
  
    <h4>8. Security and Privacy</h4>
<p>Your data is safe with us. We prioritize your privacy and data security.
</p>

  </ul>
</div>
          
        </Card>
      </main>
      <div>
        <h1>Start Your Productivity Journey Today</h1>
        <main>
        <p>Infinite Productix is more than just an app; it's your personal productivity partner. Whether you're a student, professional, entrepreneur, or anyone in between, ProTask is designed to help you achieve your goals and make the most of your time.</p>
        <p>Don't let tasks and deadlines overwhelm you. Take control of your life and become the most productive version of yourself with ProTask.</p>
        <p>Ready to get started? Download ProTask today and experience the difference for yourself. Your path to greater productivity begins here.</p>
      </main>
      </div>
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

export default AboutPage;
