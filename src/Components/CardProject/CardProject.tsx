import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './CardProject.css'

type CardProps ={
    titleCard:string
    tech: string[]
    description: string
    link: string
    hasDeploy: boolean
}

function CardProject(props: CardProps) {
    const { titleCard, tech, description, hasDeploy} = props;
    return (
    <Card className= "CardProject" sx={{ minWidth: 20 }}>
      <CardContent className="CardContent">
        <p className="TitleCard">{titleCard}</p>
        {tech.map(element => {
            return <img src={element} alt="" />
        })}
        <p className="DescriptionCard">{description}</p>
      </CardContent>
      <CardActions>
        <Button size="small">{hasDeploy ? "Acessar":"Ver Repositorio"}</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject