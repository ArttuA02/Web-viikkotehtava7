import{ Circle } from "./class/circle.js"
import { Line } from "./class/line.js"
import { Rectangle } from "./class/rectangle.js"
import { Square } from "./class/square.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const x2_input = document.querySelector('#x2')
const y2_input = document.querySelector('#y2')
const drawButton = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')
const line_color_input = document.querySelector('input[type=color]')

const updateUI = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3

    if(label4 !== undefined) {
        document.querySelector('div#fourth label').style.display = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth label').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth label').style.display = "none"
    }
}

radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value

    switch (shape) {
        case 'line':
            updateUI('x2','y2')
            break
        case 'circle':
            updateUI('radius')
            break
        case 'rectangle':
            updateUI('width','height')
            break
        case 'square':
            updateUI('width')
            break
    }
})

drawButton.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    
    switch (shape) {
        case 'line':
            drawLine()
            break
        case 'circle':
            drawCircle()
            break
        case 'rectangle':
            drawRectangle()
            break
        case 'square':
            drawSquare()
            break
    }
})

const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const lineColor = line_color_input.value
    const circle = new Circle(x,y,width/2)
    circle.setLineWidth = lineWidth
    circle.setLineColor = lineColor
    circle.draw(ctx)
}

const drawLine = () => {
    const x = x_input.value
    const y = y_input.value
    const x2 = x2_input.value
    const y2 = y2_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const lineColor = line_color_input.value
    const line = new Line(x,y,x2,y2,width)
    line.setLineWidth = lineWidth
    line.setLineColor = lineColor
    line.draw(ctx)
}

const drawRectangle = () => {
    const x = x_input.value
    const y = y_input.value
    const x2 = x2_input.value
    const y2 = y2_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const lineColor = line_color_input.value
    const rectangle = new Rectangle(x,y,x2,y2,width)
    rectangle.setLineWidth = lineWidth
    rectangle.setLineColor = lineColor
    rectangle.draw(ctx)
}

const drawSquare = () => {
    const x = x_input.value;
    const y = y_input.value;
    const width = document.querySelector('div#third input').value;
    const lineWidth = line_width_input.value;
    const lineColor = line_color_input.value
    const square = new Square(x, y, width, width);
    square.setLineWidth = lineWidth
    square.setLineColor = lineColor
    square.draw(ctx);
}
