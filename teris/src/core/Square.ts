//  小方块
import {Point, IViewer} from './types'

export class Square{
    // private _point: Point
    // private _color:string

    //  属性：显示者
    private _viewer?: IViewer

    public get viewer(){
        return this._viewer
    }

    public set viewer(v){
        this._viewer = v
    }

    public get point(){
        return this._point
    }

    public set point(val){
        this._point = val;
        // w完成显示
        if(this._viewer){
            this._viewer.show()
        }
    }

    public get color() {
        return this._color;
    }

    public constructor(private _point:Point, private _color: string){

    }
}


// const sq = new Square();

// sq.point = {
//     x: 3,
//     y: 5
// }

