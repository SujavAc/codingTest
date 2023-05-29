import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FilterChipsProps } from './Filter.model';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';

export default function FilterChips(props: FilterChipsProps) {
    const { chips } = props;
    const dispatcher = useAppDispatch();
    // active filter chip data
    const activeFilterData = useAppSelector((state) => state.filter.filterData)
    const handleChipClick = (tag: any) => {
        if (!tag) {
            return
        }
        const data = {
            ...tag,
            active: true
        }
        return dispatcher({ type: "SET_FILTER_DATA", payload: data })
    }
    return (
        <Stack spacing={1} alignItems="center">
            {chips && (
                <Stack direction="row" spacing={1}>
                    {chips.map((chip, index) =>
                        <Chip key={index} label={chip?.articleTag?.label} color="secondary" variant={(activeFilterData.label === chip?.articleTag?.label) ? "filled" : "outlined"} onClick={() => handleChipClick(chip?.articleTag)} />
                    )}
                </Stack>
            )}
        </Stack>
    );
}
