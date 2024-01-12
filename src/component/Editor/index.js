import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {IoMdUndo, IoMdRedo, IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import TextInputItem from '../TextInputItem/index'
import FontFamilyItem from '../FontFamilyItem/index'
import ColorItem from '../ColorItem/index'
import './index.css'

// More fonts can be added in this list
const fontFamilyList = [
  {
    id: 1,
    name: 'Arial',
  },
  {
    id: 2,
    name: 'Roboto',
  },
  {
    id: 3,
    name: 'Bree Serif',
  },
  {
    id: 4,
    name: 'Verdana',
  },
  {
    id: 5,
    name: 'Georgia',
  },
]

// Can add more color hex codes in this list
const colors = [
  {
    id: 0,
    color: '#000000',
  },
  {
    id: 1,
    color: '#FF0000',
  },
  {
    id: 3,
    color: '#0000FF',
  },
  {
    id: 4,
    color: '#FFFF00',
  },
  {
    id: 5,
    color: '#008000',
  },
]

const undoRedoList = []

class Editor extends Component {
  state = {
    textList: [],
    activeItem: '',
    font: 'Arial',
    size: 12,
    color: '#000000',
  }

  onClickRedo = () => {
    const updatedData = undoRedoList[undoRedoList.length - 1]
    if (undoRedoList.length !== 0) {
      this.setState(prevState => ({
        textList: [...prevState.textList, updatedData],
      }))
      const index = undoRedoList.indexOf(undoRedoList[undoRedoList.length - 1])
      undoRedoList.splice(index, 1)
    }
  }

  onClickUndo = () => {
    const {textList} = this.state
    undoRedoList.push(textList[textList.length - 1])
    const updatedList = textList.filter(
      eachItem => eachItem.id !== textList[textList.length - 1].id,
    )
    this.setState({textList: updatedList})
  }

  onAddText = event => {
    event.preventDefault()

    const newTextInfo = {
      id: uuidv4(),
      text: '',
    }

    this.setState(prevState => ({
      textList: [...prevState.textList, newTextInfo],
    }))
  }

  onActiveInput = id => {
    this.setState({activeItem: id})
  }

  onChangeFont = event => {
    this.setState({font: event.target.value})
  }

  onChangeColor = event => {
    this.setState({color: event.target.value})
  }

  onIncrementSize = () => {
    this.setState(prevState => ({size: prevState.size + 1}))
  }

  onDecrementSize = () => {
    this.setState(prevState => ({size: prevState.size - 1}))
  }

  render() {
    const {textList, activeItem, font, color, size} = this.state
    return (
      <div className="bg-container">
        <div className="undo-redo-container">
          <IoMdUndo
            type="button"
            className="undo-button"
            fill="#ffffff"
            onClick={this.onClickUndo}
          />
          <IoMdRedo
            type="button"
            className="undo-button"
            fill="#ffffff"
            onClick={this.onClickRedo}
          />
        </div>
        <div className="main-editor">
          <ul className="canvas">
            {textList.map(eachItem => (
              <TextInputItem
                key={eachItem.id}
                inputInfo={eachItem}
                onActiveInput={this.onActiveInput}
                isActive={activeItem === eachItem.id}
                size={size}
                font={font}
                color={color}
              />
            ))}
          </ul>
          <div className="editing-bar">
            <div className="editing-tools">
              <label htmlFor="font" className="label-element">
                FONT
              </label>
              <select
                className="font-families-list"
                onChange={this.onChangeFont}
              >
                {fontFamilyList.map(eachFont => (
                  <FontFamilyItem key={eachFont.id} fontInfo={eachFont} />
                ))}
              </select>
              <div className="p2">
                <div>
                  <label htmlFor="size" className="label-element2">
                    SIZE
                  </label>
                  <br />
                  <div className="input-container">
                    <input
                      type="text"
                      value={size}
                      id="size"
                      className="input-element"
                    />
                    <div className="icon-container">
                      <IoIosArrowUp
                        type="button"
                        className="arrow-icon"
                        onClick={this.onIncrementSize}
                      />
                      <IoIosArrowDown
                        type="button"
                        className="arrow-icon"
                        onClick={this.onDecrementSize}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="size" className="label-element2">
                    COLOR
                  </label>
                  <br />
                  <select
                    id="size"
                    className="color-list"
                    onChange={this.onChangeColor}
                  >
                    {colors.map(eachColor => (
                      <ColorItem key={eachColor.id} colorInfo={eachColor} />
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <form className="form" onSubmit={this.onAddText}>
              <button type="submit" className="add-text-button">
                Add Text
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Editor
