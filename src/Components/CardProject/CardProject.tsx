import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './CardProject.css'
import { IconType } from 'react-icons';

type CardProps ={
    titleCard:string
    tech: IconType[]
    description: string
    link: string
    hasDeploy: boolean
}

const theme = { 
    minWidth: 20, 
    maxWidth: 400, 
    backgroundColor: 'white' }

function CardProject(props: CardProps) {
    const { titleCard, tech, description, hasDeploy} = props;
    return (
    <Card className= "CardProject" sx={theme}>
      <CardContent className="CardContent">
        <p className="TitleCard">{titleCard}</p>
        <div className="Techs">
          {tech.map((IconComponent, index) => (
            <IconComponent size={35} key={index}/>        
          ))}
        </div>
        <p className="DescriptionCard">{description}</p>
      </CardContent>
      <CardActions className="CardActions">
        <Button sx={{color:'black'}} size="small">{hasDeploy ? "Acessar":"Ver Repositorio"}</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject