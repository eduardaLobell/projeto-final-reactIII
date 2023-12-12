import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Card, CardActions, CardContent, Typography, Container, Grid, IconButton, CardMedia, Button } from '@mui/material'
import { useEffect } from "react";
import { PokemonSumario, mudarFavorito } from "../store/modules/pokemons/pokemons.slice";
import { FavoriteRounded, FavoriteBorderRounded } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { addPokedex, removerPokedex } from "../store/modules/pokedex/pokedex.slice";


function ListarPokemons() {
  const pokemons = useAppSelector((state) => state.pokemons.pokemons)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // add favorito/pokedex
  function handleFavorite(id: number) {
    const pokemon = pokemons.find((poke) => poke.id == id)
    if(!pokemon) return

    if (pokemon.favorito) {
      dispatch(removerPokedex({ id }))
    } else {
      dispatch(addPokedex({ id, nome: pokemon.nome, imagemURL: pokemon.imagemURL }))
    }

    dispatch(mudarFavorito({id}))

  }

  // mostrar detalhes
  function handleDetails(id: number) {
    navigate(`/personagem/${id}`);
  }

  


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
            <Grid item xs={2} sm={3} md={3}>
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

                  image={item.imagemURL}
                  title="pokemon"
                />
                <CardContent >
                  <Typography gutterBottom variant="h4">
                    {item.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {item.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Altura: {item.altura}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Largura: {item.largura}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="success" onClick={() => handleDetails(item.id)}>
                    Detalhes
                  </Button>

                  <IconButton
                    aria-label="Favoritar"
                    color="error"
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