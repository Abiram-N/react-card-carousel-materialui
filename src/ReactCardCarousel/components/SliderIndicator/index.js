import React from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import breakpoints from "../../theme/breakpoints";

const SliderIndicator = ({ sliderItems, currentItem, moveToASpecificItem }) => {
    return (
        <Box style={{
            textAlign: 'center', position: 'absolute', bottom:
                window.innerWidth < breakpoints.values.md ? '4%' :
                    window.innerWidth < breakpoints.values.lg ? '6%' :
                        '10%'
            , left: '50%', transform: 'translateX(-50%)',
        }}>
            <Stack direction="row" spacing={1}>
                {
                    sliderItems.map((item, index) => (
                        <Box
                            key={index}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: currentItem === index ? 'white' : 'darkgray',
                                cursor: 'pointer',
                            }}
                            onClick={() => moveToASpecificItem(item.id)}
                        />
                    ))
                }
            </Stack>
        </Box>

    )
}

SliderIndicator.propTypes = {
    sliderItems: PropTypes.array,
    currentItem: PropTypes.number,
    moveToASpecificItem: PropTypes.func.isRequired,
}

SliderIndicator.defaultProps = {
    sliderItems: [],
    currentItem: 0,
    moveToASpecificItem: () => { },
}

export default SliderIndicator;