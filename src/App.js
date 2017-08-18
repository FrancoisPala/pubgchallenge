import React, { Component } from 'react';
import './App.css';
import First from './tables/first';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fctPtr: {
                'easy': this.filterEasy,
                'hard': this.filterHard,
                'hardcore': this.filterHardcore,
            },
            sentence: '',
        };
    }
    componentDidMount() { this.generateSentence() }
    filterEasy(list) { return list.filter(element => element.points < 40 ? element : null);}
    filterHard(list) { return list.filter(element => (element.points >= 40 && element.points < 70) ? element : null);}
    filterHardcore(list) { return list.filter(element => element.points >= 70 ? element : null);}
    changeSentence(sentence) {
        this.setState({sentence: sentence});
    }
    generateSentence(choice = 'random') {
        const first = First[Math.floor(Math.random() * First.length)];
        const table = choice !== 'random' ? this.state.fctPtr[choice](first.table) : first.table;
        const second = table[Math.floor(Math.random() * table.length)];
        const sentence = `${first.phrase}${second.title} ${second.hint} Worth ${second.points} useless internet points.`;
        this.changeSentence(sentence);
    }
    render() {

        // add a complexity marker if you want more chalenges in one
        // (start there AND only use that kind of weapon AND kill somebody with a car before killing anybody else)
        // ajouter de la difficulte. Basse: 0-39 points et moins, Moyen: de 40 a 69 points, Haute: 70+;

        // console.log(sentence);
        return (
            <div className="sentence">
                <div id='table'>
                    <ul id='menuChoice'>
                        <button onClick={() => this.generateSentence('easy')}>Easy</button>
                        <button onClick={() => this.generateSentence('hard')}>Hard</button>
                        <button onClick={() => this.generateSentence('hardcore')}>Hardcore</button>
                        <button onClick={() => this.generateSentence('random')}>Random</button>
                    </ul>
                </div>
                <p>{this.state.sentence}</p>
                <p className="bottomnote">Don't forget, if you win the challenge you can brag about it to your one other friend who plays.</p>
            </div>
        );
    }
}

export default App;
