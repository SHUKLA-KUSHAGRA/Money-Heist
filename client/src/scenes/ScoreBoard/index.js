import React, {useState, useEffect} from 'react'
import API from "../../utils/API";
import "./style.css"

function ScoreBoard () {
    const [winners, setWinners] = useState([])
    useEffect(() => {
        findUsers()
    }, [])
    function findUsers() {
        API.findAll()
        .then(res => {
            findWinners(res.data)
        })
        .catch(err => console.log(err))
    }
    function findWinners(users) {
        const winnerList = users.filter(user => user.puzzles[0].isSolved);
        const sortedData = winnerList.sort((a, b) => {
            const aTimeDiff = new Date(a.updatedAt) - new Date(a.createdAt);
            const bTimeDiff = new Date(b.updatedAt) - new Date(b.createdAt);
            return aTimeDiff - bTimeDiff;
          });
        const winnerNames = sortedData.map((winner,idx) =>
            <>
                <div class="row userEmail">
                    <div class="column" style={{width:'20%'}}>
                        <h2>{idx+1}.</h2>
                    </div>
                    <div class="column" style={{width:'50%'}}>
                        <h2>{winner.firstName} {winner.lastName}</h2>
                    </div>
                    <div class="column" style={{width:'30%'}}>
                        <h2>{Math.floor((new Date(winner.updatedAt) - new Date(winner.createdAt)) / 1000)} seconds </h2>
                    </div>
                </div>
            </>
            )
        setWinners(winnerNames)
    }
    return (
        <div>
        <div className="leader-background">
            <div className="container">
                {/* Plan for future development: this page will show each user in order of the time it took for them to finish the game.*/}
                <div className="winner">
                    WINNERS!
                </div>
                <div class="row userEmail">
                    <div className="column" style={{width:'20%'}}>
                        <h2>S.No</h2>
                    </div>
                    <div class="column" style={{width:'50%'}}>
                        <h2>Name</h2>
                    </div>
                    <div class="column" style={{width:'30%'}}>
                        <h2>Time</h2>
                    </div>
                    <div className='list-group'></div>
                </div>
                <div className="row userEmail">
                    <div className="list-group" style={{display:'flex',justifyContent:'center'}}>
                        {winners.length ===0 ? "No one has escaped yet!" : winners}
                    </div>
                </div>
            </div> 
        </div>
        <div className="animated-background">
                <div className="forest">
                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>
                    <div className="sun"></div>
                    <div className="tree01"></div>
  	                <div className="tree02"></div>
  	                <div className="tree03"></div>
                    <div className="tree04"></div>
                    <div className="combi-container">
                        <div className="combi"></div>
                        <div className="wheelshadow"></div>
                        <div className="wheel wheel01" ></div>
                        <div className="wheel wheel02" ></div>
                    </div>
                    {/* <!-- combi-container end --> */}
                </div>
                {/* <!-- forest end --> */}
                <div className="forest-background"></div>
                <div className="road"></div>
            </div>
        </div>
    )
}

export default ScoreBoard;