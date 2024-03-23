import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import breakpoints from "../../theme/breakpoints";
import "@fontsource/open-sans";

const SliderItem = ({ id, index, isHidden, video, image, title, description, actions, onlyItem, calculateMinWidth, onClose, moveToASpecificItem }) => {

    return (
        <div key={id} id={id}>
            {
                isHidden ? (
                    <div style={{
                        width: calculateMinWidth(),
                        minWidth: calculateMinWidth(),
                        height: '550px',
                        minHeight: '550px',
                        marginRight: '30px',
                        marginLeft: '30px',
                    }} />
                )
                    :
                    (


                        <Card key={index} style={{
                            width: calculateMinWidth(),
                            minWidth: calculateMinWidth(),
                            height: '550px',
                            minHeight: '550px',
                            marginRight: '30px',
                            marginLeft: '30px',
                            ...(index === 1 || onlyItem) ? {
                                transform: 'scale(1.04)',
                                transition: 'transform 1s 1s',
                            } : {
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.5s',
                                backgroundColor: 'white',
                            },
                            padding: 0,
                            marginTop: 0,
                            position: 'relative',
                            borderRadius: '15px',
                        }}
                            onClick={() => moveToASpecificItem(id)}
                        >
                            {
                                (index !== 1 && !onlyItem) && (
                                    <Box style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        backdropFilter: 'blur(1px)',
                                        zIndex: 9,
                                        cursor: 'pointer',
                                    }} />
                                )
                            }

                            <CardContent style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                height: '100%', width: '100%',
                                marginTop: 0,
                                padding: 0,
                                overflow: 'auto',
                            }}>
                                <Box style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    margin: '10px',
                                    zIndex: 8,
                                }}>
                                    <IconButton onClick={onClose} color="info">
                                        <Close />
                                    </IconButton>
                                </Box>
                                <Grid container spacing={2} style={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingTop: 0,
                                    marginTop: 0,
                                }}
                                    direction="row"
                                >
                                    {
                                        (image || video) && (
                                            <Grid item xs={window.innerWidth < breakpoints.values.md ? 12 : 7} style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: 0,
                                                marginTop: 0,
                                                height: window.innerWidth < breakpoints.values.md ? 'auto' : '100%',
                                            }}>
                                                {
                                                    video ? (
                                                        <video
                                                            src={video}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            style={{
                                                                width: '100%', height: '100%',
                                                                minWidth: '100%', minHeight: '100%',
                                                                ...index !== 1 && {
                                                                    opacity: 0.1,
                                                                },
                                                            }}
                                                        />
                                                    ) : (
                                                        <img src={image} alt={title} style={{
                                                            width: '100%', height: '100%',
                                                            objectFit: "fill"
                                                        }} />
                                                    )
                                                }
                                            </Grid>
                                        )
                                    }

                                    <Grid item xs={
                                        window.innerWidth < breakpoints.values.md ? 12 :
                                            image || video ? 5 : 12
                                    } style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        padding: image || video ? '20px 40px 20px 40px' : '40px 80px 40px 80px', // top right bottom left
                                    }}>
                                        <Stack spacing={2} direction="column" justifyContent="space-between" alignItems="center" style={{
                                            height: '100%',

                                        }}>
                                            <Stack spacing={2} style={{
                                                marginTop: 50,
                                            }}>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    letterSpacing="-0.6px"
                                                    fontSize="24px"
                                                    fontFamily="Open Sans"
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    fontSize="14px"
                                                    fontFamily="Open Sans"
                                                    fontWeight="medium"
                                                    style={{
                                                        whiteSpace: 'pre-line'
                                                    }}
                                                >{description}</Typography>
                                            </Stack>
                                            {
                                                actions && (
                                                    <Box style={{ width: '100%', marginBottom: 20 }}>
                                                        {actions}
                                                    </Box>
                                                )
                                            }

                                        </Stack>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                    )
            }
        </div>
    )
}

SliderItem.propTypes = {
    id: PropTypes.string.isRequired,
    onlyItem: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    isHidden: PropTypes.bool,
    video: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.node,
    calculateMinWidth: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    moveToASpecificItem: PropTypes.func.isRequired,
}

SliderItem.defaultProps = {
    isHidden: false,
    onlyItem: false,
    video: null,
    image: null,
    title: '',
    description: '',
    actions: null,
    calculateMinWidth: () => { },
    onClose: () => { },
    moveToASpecificItem: () => { },
}

export default SliderItem;