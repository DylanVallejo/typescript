interface AudioPlayer {
    audioVolume: number;
    songDuration: number; 
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year : number ;
}

const audioPlayer : AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

// const {audioVolume: volumen, details: { author: cantante}} = audioPlayer;
const {audioVolume: volumen, details} = audioPlayer;

// const { details } = audioPlayer;

const { author } = details
console.log(volumen)
console.log(author)
// console.log(author)

export {};