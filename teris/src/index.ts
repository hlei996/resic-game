import {Square} from './core/Square'
import { IViewer } from './core/types';

class SquareConsoleViewer implements IViewer {
    
    constructor(
        private squre:Square
    ){

    }
    show():void {
        console.log(this.squre.point, this.squre.color)
    }
    remove():void{

    }
}

const sq = new Square({ x: 0, y: 0}, "red")

sq.viewer = new SquareConsoleViewer(sq)
sq.viewer.show()

sq.point ={
    x: 2,
    y: 2
}