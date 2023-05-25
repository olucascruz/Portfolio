import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './CardProject.css'

type CardProps ={
    titleCard:string
    tech: string[]
    description: string
}

function CardProject(props: CardProps) {
    const { titleCard, tech, description} = props;
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
        <Button size="small">Acessar</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject