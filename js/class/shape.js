export class shape {
    _x
    _y

    constructor (x,y,_lineWidth = 1,_lineColor) {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._lineColor = _lineColor
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set setLineColor(lineColor) {
        this._lineColor = lineColor
    }
}