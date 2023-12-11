import { Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import { } from '@mui/icons-material'
import { useAppSelector } from '../store/hooks'



function PokemonDetalhes() {
    const pokemon = useAppSelector((state) => state.pokemonDetalhes)

    return (
        <>
            <Container >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid>
                        <Card sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                            elevation={5}
                        >
                            <CardMedia
                                sx={{
                                    height: 200, backgroundPosition: "center", backgroundSize: "contain",
                                    marginTop: 3
                                }}

                                image={pokemon.imagemURL}
                                title="pokemon"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h4">
                                    {pokemon.nome}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {pokemon.id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Altura: {pokemon.altura}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Largura: {pokemon.largura}
                                </Typography>

                                
                                <Typography variant="body2" color="text.secondary">
                                    Largura:
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PokemonDetalhes