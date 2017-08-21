import React, { Component } from 'react';
import './App.css';
import First from './tables/first';
import R from 'ramda';

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
            used: [],
        };
    }
    componentDidMount() { this.generateSentence() }
    filterEasy(list) { return list.filter(element => element.points < 40 ? element : null);}
    filterHard(list) { return list.filter(element => (element.points >= 40 && element.points < 70) ? element : null);}
    filterHardcore(list) { return list.filter(element => element.points >= 70 ? element : null);}

    changedUsed(used) {
        const usedVar = this.state.used.slice();
        usedVar.push(used);
        this.setState({used: usedVar});
    }
    changeSentence(sentence) {
        this.setState({sentence: sentence});
    }
    getFirst() {
        let result;
        while(!R.contains(result, this.state.used) || this.state.used.length < First.length) {
            result = First[Math.floor(Math.random() * First.length)];
            this.changedUsed(result);
        }
        return result;
    }
    generateSentence(choice = 'random') {
        const first = First[Math.floor(Math.random() * First.length)];
        // const first = this.getFirst(); boucle inf
        const table = choice !== 'random' ? this.state.fctPtr[choice](first.table) : first.table;
        const second = table[Math.floor(Math.random() * table.length)];
        const sentence = `${first.phrase}${second.title} ${second.hint} Worth ${second.points} useless internet points.`;
        this.changedUsed(first);
        this.changeSentence(sentence);
    }
    render() {

        // add a complexity marker if you want more chalenges in one
        // (start there AND only use that kind of weapon AND kill somebody with a car before killing anybody else)
        // ajouter de la difficulte. Basse: 0-39 points et moins, Moyen: de 40 a 69 points, Haute: 70+;

        // console.log(sentence);

        // FAIRE UN CODE PEN QUI PREND UNE PHRASE DE LETTRES, LES REORGANISE, LES SHUFFLE, PUIS LA REMPLACE AVEC UNE NOUVELLE PHRASE GO TRANSITION

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
