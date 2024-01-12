import {Component} from 'react'
import Draggable from 'react-draggable'
import {InputItem, InputItem2} from './styledComponents'
import './index.css'

class TextInputItem extends Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
    inputEl: '',
  }

  handleDrag = (e, ui) => {
    const {deltaPosition} = this.state
    const {x, y} = deltaPosition
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    })
  }

  onStart = () => {
    this.setState(prevState => ({activeDrags: prevState.activeDrags + 1}))
  }

  onStop = () => {
    this.setState(prevState => ({activeDrags: prevState.activeDrags - 1}))
  }

  onDrop = e => {
    this.setState(prevState => ({activeDrags: prevState.activeDrags - 1}))
    if (e.target.classList.contains('drop-target')) {
      e.target.classList.remove('hovered')
    }
  }

  onDropAreaMouseEnter = e => {
    const {activeDrags} = this.state
    if (activeDrags) {
      e.target.classList.add('hovered')
    }
  }

  onDropAreaMouseLeave = e => {
    e.target.classList.remove('hovered')
  }

  // For controlled component
  adjustXPos = e => {
    e.preventDefault()
    e.stopPropagation()
    const {controlledPosition} = this.state
    const {x, y} = controlledPosition
    this.setState({controlledPosition: {x: x - 10, y}})
  }

  adjustYPos = e => {
    e.preventDefault()
    e.stopPropagation()
    const {controlledPosition} = this.state
    const {x, y} = controlledPosition
    this.setState({controlledPosition: {x, y: y - 10}})
  }

  onControlledDrag = (e, position) => {
    const {x, y} = position
    this.setState({controlledPosition: {x, y}})
  }

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position)
    this.onStop()
  }

  onChangeInput = event => {
    this.setState({inputEl: event.target.value})
  }

  render() {
    const {inputEl} = this.state
    const {inputInfo, onActiveInput, isActive, color, font, size} = this.props
    const {id} = inputInfo
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
    const onMakeInputActive = () => {
      onActiveInput(id)
    }

    return (
      <>
        {isActive ? (
          <Draggable {...dragHandlers}>
            <li
              type="button"
              className="input-button"
              onClick={onMakeInputActive}
            >
              <InputItem
                type="text"
                placeholder="New Text"
                value={inputEl}
                color={color}
                font={font}
                size={size}
                isActive={isActive}
                onChange={this.onChangeInput}
              />
            </li>
          </Draggable>
        ) : (
          <Draggable {...dragHandlers}>
            <li
              type="button"
              className="input-button"
              onClick={onMakeInputActive}
            >
              <InputItem2
                type="text"
                placeholder="New Text"
                value={inputEl}
                color={color}
                font={font}
                size={size}
                isActive={isActive}
              />
            </li>
          </Draggable>
        )}
      </>
    )
  }
}

export default TextInputItem
