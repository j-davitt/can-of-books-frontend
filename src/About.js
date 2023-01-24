import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <div id='profile'>
        <Card style={{ width: '45%' }}>
          <Card.Body>
            <Card.Title>Ty Aponte</Card.Title>
            <Card.Text>
            Hi, I'm Ty. I'm an ex Lab tech, ex Radiologist with a puzzle obsession. I started getting into Software Development by watching a few youtube videos about Python, and messing around with code challenges as a way to de-stress on my lunch break and around the house. One day my partner asked what I was up to and I explained. After a few minutes of ribbing and laughing at my nerdiness, they asked why I don't just go to school for it since I gravitate towards it, and I didn't have a good answer. I quickly realized that my natural affinity for logic and language was imminently usable, and a far cry better than working in fast-health as it's called. Ideally, I'd want to develop and test these skills in the game industry, but I'm open to anything as I just love to learn and build. My history in medicine and the Army give me a solid foundation in diverse team oriented projects, often with a high pressure time component, and also working with only a vague goal . I believe these things separate me from my peers.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '45%' }}>
          <Card.Body>
            <Card.Title>Joe Davitt</Card.Title>
            <Card.Text>
            My name is Joe Davitt. I am a Marine Corps Veteran with a background in Networking. Over the past few years I have been an Excavation Foreman and am currently studying to become a Software Developer. My past careers have given me experience in problem solving and I am excited to be able to apply these skills in the tech world. I look forward to the opportunity to learn and to create something that people will use and enjoy.
            </Card.Text>
          </Card.Body>
        </Card>

      </div>

    )
  }
};

export default Profile;
