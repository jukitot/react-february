import {Character} from "./components/Character";
import {Simpsons} from "./components/Simpsons";


const App = () => {
    const simpsons=[
        {
            id: 1,
            name:'Homer Simpson',
            title:'Homer Jay Simpson is the bumbling husband of Marge, and father to Bart, Lisa and Maggie Simpson.[2] He is the son of Mona and Abraham "Grampa" Simpson. Homer held over 188 different jobs in the first 400 episodes of The Simpsons.[3] In most episodes, he works as the nuclear safety inspector at the Springfield Nuclear Power Plant (in Sector 7-G), a position which he has held since "Homer\'s Odyssey", the third episode of the series, despite the fact that he is totally unsuitable for it.[4',
            img:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            title:'Bartholomew Jojo "Bart" Simpson[1] is a fictional character in the American animated television series The Simpsons and part of the Simpson family. He is voiced by Nancy Cartwright and first appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987.' +
                ' Cartoonist Matt Groening created and designed Bart while waiting in the lobby of James L. Brooks\' office. Groening had been called to pitch a series of shorts based on his comic strip, Life in Hell, but instead decided to create a new set of characters. While the rest of the characters were named after Groening\'s family members, Bart\'s name is an anagram of the word brat. After appearing on The Tracey Ullman Show for two years, the Simpson family received its own series on Fox, which debuted December 17, 1989. Bart has appeared in every Simpsons episode except "Four Great Women and a Manicure".',
            name:'Bart Simpson',
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png'
        },
        {
            id: 3,
            name:'Marge Simpson',
            img:'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
        },
        {
            id: 4,
            name:'Lisa Simpson',
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
        },
        {
            id: 5,
            name:'Maggie Simpson',
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png'
        }

    ]

    const characters = [
        {
            id: 1,
            name:'Morty Smith',
            status:'Alive',
            species:'Human',
            gender: 'Male',
            img:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            id: 2,
            name:'Rick Sanchez',
            status:'Alive',
            species:'Human',
            gender: 'Male',
            img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 3,
            name:'Jerry Smith',
            status:'Alive',
            species:'Human',
            gender: 'Male',
            img:'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
        },
        {
            id: 4,
            name:'Summer Smith',
            status:'Alive',
            species:'Human',
            gender: 'Female',
            img:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        },
        {
            id: 5,
            name:'Beth Smith',
            status:'Alive',
            species:'Human',
            gender: 'Female',
            img:'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
        },
        {
            id: 6,
            name:'Abadango Cluster Princess',
            status:'Alive',
            species:'Alien',
            gender: 'Female',
            img: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
        }


    ]
    return (
        <div>
            {characters.map(character=><Character character={character} key={character.id}/>)}
            {/*{simpsons.map(simpson=><Simpsons simpson={simpson} key={simpson.id}/>)}*/}

        </div>
    );
};

export {App};