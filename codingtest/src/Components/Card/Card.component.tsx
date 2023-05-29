import {
    ArrowForward
} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardProps } from "./Card.model";
import { CardActionArea, CardActions, IconButton, Typography } from "@mui/material";
import { getUniqueTag } from "../../Utils";

export default function CardComponent(props: CardProps) {
    const {
        articleDescription,
        articleImage,
        articleLink,
        articleTag,
        articleTitle
    } = props;

    return (
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", height: '100%' }}>
            <CardActionArea href={articleLink?.url || ""} target={articleLink?.openInNewTab ? "_blank" : "_self"}>
                <CardMedia
                    component="img"
                    sx={{ height: 250 }}
                    image={articleImage}
                    title={articleTitle}
                    loading="lazy"
                />
                <CardContent sx={{ alignItems: "stretch" }}>
                    <Typography gutterBottom variant="body1" component="div" color="secondary">
                        {articleTag?.label}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" color="secondary">
                        {articleTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {articleDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton onClick={() => getUniqueTag()} href={articleLink?.url || ""} target={articleLink?.openInNewTab ? "_blank" : "_self"}> <ArrowForward color="error" /></IconButton>
            </CardActions>
        </Card>

    );
}
