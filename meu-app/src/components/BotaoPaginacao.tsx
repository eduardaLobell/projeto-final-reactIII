import { Pagination, Stack } from '@mui/material'
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { listarPokemons } from '../store/modules/pokemons/actions';

function BotaoPaginacao() {
    const contadorPokemons = useAppSelector((state) => state.pokemons.count)
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const offset = (page - 1) * 20
        dispatch(listarPokemons(offset));

        console.log(offset)
    };

    return (
        <>
            <Stack
            sx={{
                justifyContent: "center",
                alignItems: "center",
                pt: 3,
                pb: 3
            }}>
                <Pagination count={Math.round(contadorPokemons / 20)} onChange={handleChange} />
            </Stack>
        </>
    )
}

export default BotaoPaginacao