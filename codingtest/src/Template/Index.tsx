import { Button, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import { Key, lazy, Suspense, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';
import { CardProps } from '../Components/Card/Card.model';
import data from '../data';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { getUniqueTag } from '../Utils';

// code spliting
const CardComponent = lazy(() => import("../Components/Card/Card.component"))
const FilterChips = lazy(() => import("../Components/Filter/Filter.component"))

export default function Template() {
    const isMobile = useMediaQuery('(max-width:930px)') ? true : false;

    const dispatch = useAppDispatch();

    // get unique lable from array collection and then convert into chis model
    const filterChipsData = getUniqueTag()?.map((data) => ({ articleTag: data.articleTag }))

    // default number of item display
    const forDesktop = useAppSelector((state) => state.filter.defaultItemDesktopDisplay)
    const forMobile = useAppSelector((state) => state.filter.defaultItemMobileDisplay)

    const defaultItems = isMobile ? forMobile : forDesktop

    // get selected filter label
    const activeFilterData = useAppSelector((state) => state.filter.filterData)

    // get filtered results
    const filteredResultData = useAppSelector((state) => state.filter.filterResultData)

    const handleDisplayMoreItems = () => {
        return dispatch({ type: "LOAD_MORE_FILTER_DATA", payload: 3 })
    }

    const totalNumberOfFilteredResult = activeFilterData?.label ? data.filter((article) => article.articleTag.label === activeFilterData.label).length : data.length;


    const isLoadMoreButtonDisable = defaultItems >= totalNumberOfFilteredResult;

    useEffect(() => {
        if (activeFilterData?.label) {
            const newData = data.filter((article) => article?.articleTag?.label === activeFilterData?.label)
            dispatch({ type: "SET_FILTER_RESULT_DATA", payload: newData })
        }
        else {
            dispatch({ type: "SET_FILTER_RESULT_DATA", payload: data })
        }
        // eslint-disable-next-line
    }, [activeFilterData])

    return (
        <Grid container direction="row" justifyContent="center" sx={{ padding: 2 }}>
            <Grid item xs={12} sm={10}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant='h1' fontSize={30}>{!isMobile ? "The Latest" : "Latest food and wine articles"}</Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Suspense fallback={<CircularProgress color='secondary' />}><FilterChips chips={filterChipsData} /></Suspense>
                    </Grid>
                    <Grid item >
                        {/* to meet the design i must do flex-start */}
                        <Grid container direction="row" spacing={4} justifyContent="center" sx={{ display: "flex", justifyContent: "flex-start", padding: 0, margin: 0 }}>
                            <Suspense fallback={<CircularProgress color='secondary' />}>{filteredResultData.slice(0, defaultItems).map((article: JSX.IntrinsicAttributes & CardProps, index: Key | null | undefined) => <Grid item key={index}><CardComponent {...article} /></Grid>)}</Suspense>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant='outlined' color='error' onClick={handleDisplayMoreItems} disabled={isLoadMoreButtonDisable}>More Articles</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
