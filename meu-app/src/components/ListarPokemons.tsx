import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Card, CardActions, CardContent, Button, Typography, Avatar, Container, Grid, IconButton } from '@mui/material'
import { useEffect } from "react";
import { PokemonSumario } from "../store/modules/pokemons/pokemons.slice";
import { FavoriteRounded, FavoriteBorderRounded } from '@mui/icons-material'

function ListarPokemons() {

  const dispatch = useAppDispatch();
  function handleFavorite(id: number) {
    // dispatch(toggleFavorito({ id }));
  }

  const pokemons = useAppSelector((state) => state.pokemons.pokemons)

  useEffect(() => {
    if (pokemons.length) {
      console.log(pokemons)
    }
  }, [pokemons])

  return (
    <>
      <Container >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemons.map((item: PokemonSumario) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={item.imagemURL}
                  sx={{ width: 130, height: 130 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    <strong>{item.id} - {item.nome}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="Favorite"
                    onClick={() => handleFavorite(item.id)}
                  >
                    {item.favorito ? (
                      <FavoriteRounded color="error" />
                    ) : (
                      <FavoriteBorderRounded color="error" />
                    )}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Container>
    </>
  )
}



export default ListarPokemons;