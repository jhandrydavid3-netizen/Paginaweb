import { Alert } from "@mui/material";
function TitlePageMui({ title = "Titulo de Pagina" }) {
    return (
        <>
            <Alert variant="outlined" severity="info" sx={{ width: '100%', my: 3 }}>
                {title}
            </Alert>


        </>

    )
}
export default TitlePageMui