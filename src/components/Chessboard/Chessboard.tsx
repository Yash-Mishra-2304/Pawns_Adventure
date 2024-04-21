import Tile from '../Tile/Tile'
import './Chessboard.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[]= []

pieces.push({image: "assets/images/pawn_b.png", x: 0, y: 7})
pieces.push({image: "assets/images/pawn_b.png", x: 1, y: 7})
pieces.push({image: "assets/images/pawn_b.png", x: 0, y: 6})
pieces.push({image: "assets/images/pawn_b.png", x: 2, y: 7})
pieces.push({image: "assets/images/pawn_b.png", x: 0, y: 5})
pieces.push({image: "assets/images/pawn_b.png", x: 1, y: 6})
pieces.push({image: "assets/images/pawn_b.png", x: 3, y: 7})
pieces.push({image: "assets/images/pawn_b.png", x: 0, y: 4})
pieces.push({image: "assets/images/pawn_b.png", x: 1, y: 5})
pieces.push({image: "assets/images/pawn_b.png", x: 2, y: 6})

pieces.push({image: "assets/images/pawn_w.png", x: 7, y: 0})
pieces.push({image: "assets/images/pawn_w.png", x: 7, y: 1})
pieces.push({image: "assets/images/pawn_w.png", x: 6, y: 0})
pieces.push({image: "assets/images/pawn_w.png", x: 7, y: 2})
pieces.push({image: "assets/images/pawn_w.png", x: 5, y: 0})
pieces.push({image: "assets/images/pawn_w.png", x: 6, y: 1})
pieces.push({image: "assets/images/pawn_w.png", x: 7, y: 3})
pieces.push({image: "assets/images/pawn_w.png", x: 4, y: 0})
pieces.push({image: "assets/images/pawn_w.png", x: 5, y: 1})
pieces.push({image: "assets/images/pawn_w.png", x: 6, y: 2})


export default function Chessboard(){
    let board = [];
    for(let j = verticalAxis.length-1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = ' ';
            pieces.forEach(p=>{
                if (p.x === i && p.y === j){
                    image = p.image;
                }

            })
            board.push(<Tile image={image} number = {number}/> );
        }
    }
    return <div id="chessboard">{board}</div>
}