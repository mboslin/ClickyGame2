import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Score from './components/Score/Score';
import PlayerCard from './components/PlayerCard/PlayerCard';
import GameOver from './components/Gameover/Gameover';
import Wrapper from './components/Wrapper/Wrapper';
import Characters from './Characters.json';



function randomCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {
  state = {
    msg: "Click any Stranger Things Character to Play",
    Score: 0,
    highScore: 0,
    Characters: Characters,
    selected: [],
    Gameover: false,
    countdown: '',
  }


  shuffleCharacters = () => {
    let shuffled = randomCharacters(Characters);
    this.setState({ Characters: shuffled });
  }


  handleClick = (name) => {
    if (!this.state.Gameover) {

      if (this.state.selected.indexOf(name) === -1) {
        this.increment();
        this.setState({ selected: [...this.state.selected, name] });

      } else {

        this.setState({ msg: "Game OVER", gameover: true })
        this.reset();
        setTimeout(() => {
          this.setState({ countdown: 3 });
        }, 1000)
        setTimeout(() => {
          this.setState({ countdown: 2 });
        }, 2000)
        setTimeout(() => {
          this.setState({ countdown: 1 });
        }, 3000)
      }

    } else {

      this.setState({
        msg: "Click any Stranger Things Character to Play",
        selected: [],
        Score: 0,
        Gameover: false
      });
    }
  }

  increment = () => {
    const newScore = this.state.Score + 1;
    this.setState({
      Score: newScore,
      msg: "That is Correct!"
    });

    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }

    if (newScore === 12) {
      this.setState({
        msg: "You WON!",
        selected: [],
        Gameover: true
      });
    }
    this.shuffleCharacters();
  };

  reset = () => {
    setTimeout(() => {
      this.setState({
        msg: "Click any Stranger Things Character to Play",
        Score: 0,
        highScore: this.state.highScore,
        selected: [],
        Gameover: false,
        countdown: 3
      });

      this.shuffleCharacters()
    }, 4000);
  }

  render() {
    if (!this.state.Gameover) {

      return (
        <Wrapper>
          <Navbar />
          <Header />
          <Score
            msg={this.state.msg}
            Score={this.state.Score}
            highScore={this.state.highScore}
          />

          <div className="container">

            {
              this.state.Characters.map(Characters => (
                <PlayerCard
                  key={Characters.name}
                  name={Characters.name}
                  img_url={Characters.img_url}
                  shuffleCharacters={this.shuffleCharacters}
                  handleClick={this.handleClick}
                  increment={this.increment}
                  reset={this.reset}
                />
              ))
            }
          </div>
        </Wrapper>
      )

    } else {

      return (
        <Wrapper>
          <Navbar />
          <Header />
          <Score
            msg={this.state.msg}
            Score={this.state.Score}
            highScore={this.state.highScore}
          />

          <div className="container">

            <GameOver
              msg={this.props.msg}
              Score={this.state.Score}
              gameover={this.state.Gameover}
              countdown={this.state.countdown}
              handleClick={this.handleClick}
              reset={this.reset}
            />
          </div>
        </Wrapper>
      )
    }
  }
}

export default App;
