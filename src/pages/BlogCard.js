import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const BlogCard = ({rssFetch}) => {
    
    const RssHTMLDOM = new DOMParser().parseFromString(rssFetch.content, 'text/html')
    const RssTitleDOM = new DOMParser().parseFromString(rssFetch.title, 'text/html')
    const titleRss = RssTitleDOM.body.innerText
    const imgLink = RssHTMLDOM.querySelector('img').src
    const arrayParagraph = RssHTMLDOM.querySelectorAll('p')

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid sx={{ display: 'flex', flexDirection:'column', alignItems: 'center'}} item xs={12} md={6} xl={4} >
        <Card sx={{maxWidth: 345, minHeight: 600 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={titleRss}
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="194"
            image={imgLink}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {arrayParagraph[0].innerText}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>
                {arrayParagraph[1].innerText}
                {arrayParagraph[2].innerText}
                {arrayParagraph[3].innerText}
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
        </Grid>
  )
}
