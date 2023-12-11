import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Card, CardActions, CardContent, Box, Typography, Avatar, Container, Grid, IconButton, CardMedia, Button } from '@mui/material'
import { useEffect } from "react";
import { PokemonSumario } from "../store/modules/pokemons/pokemons.slice";
import { FavoriteRounded, FavoriteBorderRounded, VisibilityRounded } from '@mui/icons-material'
import Personagem from "../pages/Personagem";
import { listarPorId } from "../store/modules/pokemon/actions";
import { useNavigate } from "react-router-dom";


function ListarPokemons() {

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();


  function handleFavorite(id: number) {
    
  }

  function handleDetails(id: number) {
    navigate(`/personagem/${id}`);
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

                  <Button onClick={() =>  handleFavorite(item.id)} variant="outlined" color="error">
                    Favoritar
                  </Button>
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