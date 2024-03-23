import * as React from "react"
import {ReactCardCarousel} from "./ReactCardCarousel"
import PropTypes from "prop-types"

export const CardCarousel = ({
  open = false,
  onClose = () => {},
  items = [],
}) => {
  return <ReactCardCarousel open={open} onClose={onClose} items={items} />
}

CardCarousel.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  items: PropTypes.array,
}
