import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './productivity.css'; // Import your CSS file
import Base from '../components/base';

const ProductivityChallenge = (props) => {

  return (
    <Base>
    <div>
      <h1 className="text-center">Productivity Challenge</h1>
      <div id="progress-bar">
        <div id="progress"></div>
      </div>
      <Row>
        <Col md={14} className="challenge">
          <h2>30-Day Habit Challenge</h2>
          <p>
            Pick one habit you want to develop, such as waking up early,
            exercising, or reading daily, and commit to doing it for 30 consecutive days.
          </p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Daily Journaling Challenge</h2>
    <p>Spend a few minutes each day journaling about your thoughts, goals, and accomplishments. This can help you
      reflect on your progress and set intentions.</p>
          <Button color="success">Complete</Button>
        </Col>
      </Row>
      <Col md={14} className="challenge">
      <h2>Time-Tracking Challenge:</h2>
    <p>Use a time-tracking app or method to monitor how you spend your time for a week. Analyze the data to identify
      areas where you can become more efficient.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
          <h2>Pomodoro Technique Challenge</h2>
          <p>
            Use the Pomodoro technique (25 minutes of focused work followed by a
            5-minute break) for a week or a month to enhance your concentration and
            break tasks into manageable chunks.
          </p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Networking Challenge</h2>
    <p>Reach out to a certain number of new people or contacts in your field each week or month to expand your
      professional network.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Reading Challenge:</h2>
    <p>Set a goal to read a certain number of books in a month or year. Track your progress and vary the types of books
      you read to expand your knowledge</p>
      <Button color="success">Complete</Button> 
      </Col>
        <Col md={14} className="challenge">
        <h2>No Sugar Challenge</h2>
    <p>Cut out added sugars from your diet for a month to improve your energy levels and overall health, which can positively impact your productivity.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Email Management Challenge</h2>
    <p>Dedicate specific times during the day to check and respond to emails. Aim to keep your inbox empty or near-empty by the end of each day.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Minimalism Challenge</h2>
    <p>Declutter your physical and digital spaces by getting rid of items or files you no longer need. Try the "30-day minimalism challenge" by removing one item on the first day, two on the second, and so on.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>One-Month No-Procrastination Challenge</h2>
    <p>Challenge yourself to tackle tasks as they come up without procrastinating for an entire month. This can help build discipline.</p>
          <Button color="success">Complete</Button>
        </Col>
        <Col md={14} className="challenge">
        <h2>Digital Detox Challenge</h2>
    <p>Disconnect from social media and non-essential apps for a specified period (e.g., a weekend or a full week) to reduce distractions and increase focus.</p>
          <Button color="success">Complete</Button>
        </Col>
    </div>
    <footer>
    <h4>@copy; 2023 About Infinite Productix</h4>
            <p>
              Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
            </p>
    </footer>
    </Base>
  );   
  
};

export default ProductivityChallenge;
