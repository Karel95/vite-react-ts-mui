import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// Definimos el tipo para la función que se pasa al Hijo
type ServiceInfo = {
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  serviceImg: string;
};

type ServiceProps = {
  serviceInfo: ServiceInfo;
};

export const Services: React.FC<ServiceProps> = ({ serviceInfo }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.2",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={serviceInfo.serviceImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceInfo.serviceName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {serviceInfo.serviceDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Add</Button>
        <Button color="error" size="small">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
