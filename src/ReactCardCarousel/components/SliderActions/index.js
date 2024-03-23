import React from 'react';
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { Fragment, useRef } from "react";
import breakpoints from "../../theme/breakpoints";


const SliderActions = ({ isNextItemAvailable, isPreviousItemAvailable, moveToNext, moveToPrevious }) => {

    //create a ref for next and previous button
    const nextButtonRef = useRef(null);
    const previousButtonRef = useRef(null);


    return (
        <Fragment>
            {
                isNextItemAvailable() && (

                    <Box
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: 10,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'transparent',
                            height: '100%',
                            width: window.innerWidth > breakpoints.values.md ? '10%' : '0px',
                            zIndex: 10,
                        }}
                        onMouseEnter={(event) => {
                            if (nextButtonRef && window.innerWidth > breakpoints.values.md) {
                                nextButtonRef.current.style.opacity = 1;
                            }
                        }}
                        onMouseLeave={(event) => {
                            if (nextButtonRef && window.innerWidth > breakpoints.values.md) {
                                nextButtonRef.current.style.opacity = window.innerWidth < breakpoints.values.md ? 0.5 : 0.1
                            }
                        }}
                    >
                        <Box
                            // Add the ref to the button
                            ref={nextButtonRef}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: 10,
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '25%',
                                width: '50px',
                                cursor: 'pointer',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                ...window.innerWidth < breakpoints.values.md ? {
                                    opacity: 0.5,
                                } : {
                                    opacity: 0.1,
                                },
                                transition: 'opacity 0.5s',
                                borderRadius: '15px',
                            }}
                            {...((window.innerWidth > breakpoints.values.md) && {
                                onMouseEnter: (event) => {
                                    event.target.style.opacity = 1;
                                },
                                onMouseLeave: (event) => {
                                    event.target.style.opacity = 0.1;
                                },
                            })}
                            onClick={moveToNext}
                        >
                            <IconButton color="white" style={{ color: 'white', zIndex: 99 }}>
                                <ChevronRight fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>

                )
            }

            {
                isPreviousItemAvailable() && (
                    <Box
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: 10,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'transparent',
                            height: '100%',
                            width: window.innerWidth > breakpoints.values.md ? '10%' : '0px',
                            zIndex: 10,
                        }}
                        onMouseEnter={(event) => {
                            if (previousButtonRef && window.innerWidth > breakpoints.values.md) {
                                previousButtonRef.current.style.opacity = 1;
                            }
                        }}
                        onMouseLeave={(event) => {
                            if (previousButtonRef && window.innerWidth > breakpoints.values.md) {
                                previousButtonRef.current.style.opacity = window.innerWidth < breakpoints.values.md ? 0.5 : 0.1
                            }
                        }}
                    >
                        <Box
                            // Add the ref to the button
                            ref={previousButtonRef}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: 10,
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '25%',
                                width: '50px',
                                cursor: 'pointer',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                ...window.innerWidth < breakpoints.values.md ? {
                                    opacity: 0.5,
                                } : {
                                    opacity: 0.1,
                                },
                                transition: 'opacity 0.5s',
                                borderRadius: '15px',
                            }}

                            {...((window.innerWidth > breakpoints.values.md) && {
                                onMouseEnter: (event) => {
                                    event.target.style.opacity = 1;
                                },
                                onMouseLeave: (event) => {
                                    event.target.style.opacity = 0.1;
                                },
                            })}
                            onClick={moveToPrevious}
                        >
                            <IconButton color="white">
                                <ChevronLeft fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>
                )
            }
        </Fragment >
    )
}

SliderActions.propTypes = {
    isNextItemAvailable: PropTypes.func.isRequired,
    isPreviousItemAvailable: PropTypes.func.isRequired,
    moveToNext: PropTypes.func.isRequired,
    moveToPrevious: PropTypes.func.isRequired,
}

SliderActions.defaultProps = {
    isNextItemAvailable: () => { },
    isPreviousItemAvailable: () => { },
    moveToNext: () => { },
    moveToPrevious: () => { },
}

export default SliderActions;