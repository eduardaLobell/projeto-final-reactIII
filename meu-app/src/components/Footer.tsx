import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../store/hooks'

function Footer() {
    const pokemons = useAppSelector((state) => state.pokemons)

    return (
        <Box component='footer' width='100%' height='200px' sx={{ backgroundColor: "#9b0505", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
             <Typography sx={{ color: '#ffff', fontFamily: 'cursive', top: '6px' }} variant='h5'>
                total de pokemons: {pokemons.count}
            </Typography>
            <Typography sx={{ color: '#ffff' }}>
                Desenvolvido por: Eduarda Löbell da Silva e co-desenvolvido por: Felipe Gustavo Borba Giehl
            </Typography>
        </Box>
    )
}

export default Footer