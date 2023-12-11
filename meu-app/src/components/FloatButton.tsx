import { Box, Fab, ImageList, ImageListItem } from "@mui/material";


function FloatButton() {
    return (
        <Box>
            <Fab  sx={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: "#9b0505", backgroundImage: "https://static.wikia.nocookie.net/pokepediabr/images/3/38/Pok%C3%A9dex_Kanto.png/revision/latest?cb=20131224014121&path-prefix=pt-br"  }} aria-label="add">
            <ImageList>
                <ImageListItem>
                    <img src="\assets\Pok%3Fdex_Kanto.webp" alt="" />
                </ImageListItem>
            </ImageList>
        </Fab>
        </Box>
    )
}

export default FloatButton

// import { ImageList, ImageListItem } from "@mui/material";

// const style = {
//   height: 75,
//   width: 100,
//   display: { xs: "flex", sm: "flex" },
// };


// function FloatButton() {
//   return (
//     <ImageList>
//       <ImageListItem component="form" sx={style}>
//         <img src="\src\assets\Pok%3Fdex_Kanto.webp" alt="" />
//       </ImageListItem>
//     </ImageList>
//   );
// }

// export default FloatButton;