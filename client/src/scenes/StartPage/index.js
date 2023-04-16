import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
    }
  }

  const progress = Math.floor((count/3)*100) +"%"

  return (
    <div className="background-startpage">
      <header className="greeting">
        {props.user ? props.user.email : "not logged in"} , Help! Professor to escape
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress} Completed
        </div>
      </div>
      <Row>
        <Col size="md-8">
            <div className="info-card">
              <div className="card-body">
                <h5 className="card-title">The Heist</h5>
                <p className="card-text">
                  Professor is known for his remarkable intelligence and his uncanny ability to pull off elaborate heists. His latest target was The President who hides his secret from the country.
                </p>
                <br></br>
                <p className="card-text">
                  Professor had meticulously planned every detail of the heist, but as he was about to make his move, he found himself unexpectedly trapped in the President's house. He was unaware of new security system , and now he was stuck inside with no way out.
                </p>
                <br></br>
                <p className="card-text">
                  He knew that you were the only person he could trust to help him pull off the heist and escape from the house before he gets caught.
                </p>
                <br></br>
                <p className="card-text">
                  Help! Professor escape Before it's too late!
                </p>
                <div className="startBtn">
                    <Link
                        to="/office"
                        style={{ textDecoration: 'none' }}
                    >
                      <div className="start">
                      {progress > 0+"%" ? "RESUME" : "START GAME"}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
        </Col>
      </Row>
      <div className="night-background">
                <div className="forest-start">
                 </div>
{/* <!-- forest end --> */}
                <div className="forest-background-start"></div>
                <div className="road"></div>
            </div> 
    </div>
  );
}

export default StartPage;