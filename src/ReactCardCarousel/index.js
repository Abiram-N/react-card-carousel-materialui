import React from 'react';
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SliderActions from "./components/SliderActions";
import SliderIndicator from "./components/SliderIndicator";
import SliderItem from "./components/SliderItem";


export function ReactCardCarousel({ open, onClose, items }) {

    const [sliderItems, setSliderItems] = useState([])
    const [currentItem, setCurrentItem] = useState(0)
    const [viewedItems, setViewedItems] = useState([])

    useEffect(() => {
        setSliderItems(items || [])

        const itemsDeepCopy = [...items] // Deep copy of items

        // Set viewed sliderItems to 3
        let currentViewedItems = [
            ...(items && items.length > 1 ? [{
                id: 0,
                content: null,
                isHidden: true
            }] : []),
            ...itemsDeepCopy.slice(0, 2)
        ];
        setViewedItems(currentViewedItems);
        setCurrentItem(0)
    }, [])

    const moveToNext = () => {
        const itemsDeepCopy = [...sliderItems] // Deep copy of items
        if (viewedItems && !viewedItems[0].isHidden) {
            const currentViewedItems = [
                ...itemsDeepCopy.slice(currentItem, currentItem + 3)
            ]
            if (currentViewedItems.length < 3) {
                currentViewedItems.push({
                    id: 0,
                    content: null,
                    isHidden: true
                })
            }
            setViewedItems(currentViewedItems)
            setCurrentItem(currentItem + 1)
        } else {
            const currentViewedItems = [
                ...itemsDeepCopy.slice(0, 3)
            ]
            if (currentViewedItems.length < 3) {
                currentViewedItems.push({
                    id: 0,
                    content: null,
                    isHidden: true
                })
            }
            setViewedItems(currentViewedItems)
            setCurrentItem(1)
        }
    }

    const moveToPrevious = () => {
        const itemsDeepCopy = [...sliderItems] // Deep copy of items
        if (viewedItems && viewedItems[0]?.isHidden) {
            const currentViewedItems = [
                ...itemsDeepCopy.slice(currentItem - 2, currentItem + 1)
            ]
            if (currentViewedItems.length < 3) {
                currentViewedItems.unshift({
                    id: 0,
                    content: null,
                    isHidden: true
                })
            }
            setViewedItems(currentViewedItems)
            setCurrentItem(currentItem - 1)
        } else {
            if (currentItem === 1) {
                let currentViewedItems = [
                    {
                        id: 0,
                        content: null,
                        isHidden: true
                    },
                    ...itemsDeepCopy.slice(0, 2)
                ];
                if (currentViewedItems.length < 3) {
                    currentViewedItems.push({
                        id: 0,
                        content: null,
                        isHidden: true
                    })
                }
                setViewedItems(currentViewedItems)
                setCurrentItem(currentItem - 1)
            }
            else {
                const currentViewedItems = [
                    ...itemsDeepCopy.slice(currentItem - 2, currentItem + 1)
                ]
                if (currentViewedItems.length < 3) {
                    currentViewedItems.unshift({
                        id: 0,
                        content: null,
                        isHidden: true
                    })
                }
                setViewedItems(currentViewedItems)
                setCurrentItem(currentItem - 1)
            }
        }
    }

    const isNextItemAvailable = () => {
        return currentItem < sliderItems.length - 1
    }

    const isPreviousItemAvailable = () => {
        if (viewedItems && viewedItems[0]?.isHidden) {
            return currentItem > 1
        }
        return currentItem > 0
    }

    const calculateMinWidth = () => {
        //currentWidth of screen
        let width = window.innerWidth;
        //calculate min width by 80% of current width
        let minWidth = width * 0.8;
        if (minWidth > 885) minWidth = 885;
        if (minWidth < 765) minWidth = width - 80;
        return `${minWidth}px`;
    }

    const moveToASpecificItem = (id) => {
        //find the index of the item
        let index = sliderItems.findIndex(item => item.id === id);
        //if the item is not found, return
        if (index === -1) return;

        //if the item is already in the view, return
        if (index === currentItem) return;

        //if the item is in the next view
        if (index > currentItem && index < currentItem + 3) {
            //move to the next item
            moveToNext();
            return;
        }
        //if the item is in the previous view
        else if (index < currentItem && index > currentItem - 3) {
            //move to the previous item
            moveToPrevious();
            return;
        }
        else {
            const itemsDeepCopy = [...sliderItems] // Deep copy of items
            //Get item after the current item
            const currentViewedItems = [
                itemsDeepCopy[index - 1] ? itemsDeepCopy[index - 1] : {
                    id: 0,
                    content: null,
                    isHidden: true
                },
                itemsDeepCopy[index],
                itemsDeepCopy[index + 1] ? itemsDeepCopy[index + 1] : {
                    id: 0,
                    content: null,
                    isHidden: true
                }
            ]

            setViewedItems(currentViewedItems)
            setCurrentItem(index)


        }

    }

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur( 5px )", padding: 0, margin: 0, }}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}
        >
            <Box id="box1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden', width: '100%', backgroundColor: "transparent" }}>
                <Stack direction="column" spacing={2}>
                    <Box
                        id="box2"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden', width: '100%', backgroundColor: "transparent" }}>
                        {
                            viewedItems
                                .map((item, index) => (
                                    <div key={item.id} id={item.id}>
                                        {
                                            item.isHidden ? (
                                                <div style={{ width: calculateMinWidth(), minWidth: calculateMinWidth(), height: '550px', minHeight: '550px', marginRight: '30px', marginLeft: '30px', }} />
                                            )
                                                :
                                                (

                                                    <SliderItem
                                                        onlyItem={viewedItems.length === 1}
                                                        id={item.id}
                                                        index={index}
                                                        isHidden={item.isHidden}
                                                        video={item.video}
                                                        image={item.image}
                                                        title={item.title}
                                                        description={item.description}
                                                        actions={item.actions || null}
                                                        calculateMinWidth={calculateMinWidth}
                                                        onClose={onClose}
                                                        moveToASpecificItem={moveToASpecificItem}
                                                    />

                                                )
                                        }
                                    </div>
                                ))
                        }
                    </Box>

                    <SliderIndicator
                        sliderItems={sliderItems}
                        currentItem={currentItem}
                        moveToASpecificItem={moveToASpecificItem}
                    />

                </Stack>

                <SliderActions
                    isNextItemAvailable={isNextItemAvailable}
                    isPreviousItemAvailable={isPreviousItemAvailable}
                    moveToNext={moveToNext}
                    moveToPrevious={moveToPrevious}
                />



            </Box>
        </Dialog >
    )

}

ReactCardCarousel.defaultProps = {
    open: false,
    onClose: () => { }
}

ReactCardCarousel.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
}

export default ReactCardCarousel;