import './CardTechnologies.css'
import { Card, CardContent} from "@mui/material"
import { IconType } from 'react-icons';

interface IconData {
    icon: IconType;
    name: string;
  }

interface CardProps {
  title: string;
  icons: IconData[]; 
}

const theme = { 
    minWidth: 20,
    maxWidth: 400,  
    backgroundColor: 'gray' }

function CardTechnologies({ title, icons }: CardProps){
    return (
        <Card className= "CardTechnologies" sx={theme}>
            <CardContent className="CardContent">
                <h3>{title}</h3>
                    <div className="Icons">
                        {icons.map((Icon, index) => (
                            
                           <Icon.icon 
                            title={Icon.name || Icon.icon.name} 
                            key={index} size={48} />
                            
                        ))}
                    </div>        
            </CardContent>
        </Card>
    )
}


export default CardTechnologies