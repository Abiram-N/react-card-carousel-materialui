import * as React from "react"
import * as ReactDOM from "react-dom"
import {CardCarousel} from "../src"

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<CardCarousel />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
