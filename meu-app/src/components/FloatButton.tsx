import { Fab, ImageList, ImageListItem } from "@mui/material";


function FloatButton() {
    return (
        <Fab color="secondary" aria-label="add">
            <ImageList>
                <ImageListItem>
                    <img src="\assets\Pok%3Fdex_Kanto.webp" alt="" />
                </ImageListItem>
            </ImageList>
        </Fab>
    )
}

export default FloatButton