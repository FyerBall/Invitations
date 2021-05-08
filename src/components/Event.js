import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Box, Divider } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1rem',
    background: '#F7F7F7',
    borderRadius: 16,
  },
  media: {
    height: 140,
  },
})
function Event({ title, start, end, desc }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const [isAccepted, setIsAccepted] = useState(false)

  const random = Math.floor(Math.random() * 90)

  const [randomNum, setRandomNum] = useState(random)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const accepted = () => {
    setIsAccepted(true)
    setRandomNum(random + 1)
  }
  const declined = () => {
    setIsAccepted(!isAccepted)
  }

  // MUI styles
  const classes = useStyles()
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              onClick={toggleReadMore}
            >
              {isReadMore ? desc.slice(0, 150) : desc}

              <Box
                component='span'
                onClick={toggleReadMore}
                className='read-or-hide'
                color='#4932f2'
              >
                {isReadMore ? '...read more' : ' show less'}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size='small'
            color='primary'
            onClick={accepted}
            disabled={isAccepted}
          >
            <CheckCircleOutlineIcon fontSize='large' />
          </Button>
          <Button color='secondary' onClick={declined}>
            <CancelIcon fontSize='large' />
          </Button>

          <Button disabled>attendee: {randomNum}</Button>
        </CardActions>
        <Divider />
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          m={2}
          style={{ textTransform: 'capitalize' }}
        >
          {start && (
            <Box component='span' color='#EE5556'>
              starts: {start}
            </Box>
          )}

          {end && (
            <Box component='span' color='#EE5556'>
              ends: {end}
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  )
}

export default Event
