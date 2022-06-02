import React from 'react';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';
import parse from 'rss-to-json';

export const Blog = () => {
    const [RssResponse, setRssResponse] = useState([])

    useEffect(() => {
        parse('https://cors-anywhere.herokuapp.com/http://sneakerbardetroit.com/feed/')
        .then((rss) => {
            setRssResponse(rss.items.slice(0,9))
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <Grid container
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        sx={{ mt: '50px'}}>
        {RssResponse.map((rssEntry) => {
            return(
                <BlogCard rssFetch={rssEntry}></BlogCard>
            )

        })}
        </Grid>
    )

}

