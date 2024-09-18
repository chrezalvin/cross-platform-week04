import { Image } from "react-native";
import styles from "../styles";
import { Card, Icon, IconButton } from "react-native-paper";

interface AvatarProps{
    id: number;
    name: string;
    email: string;
    photo_url: string;

    onDelete?: (id: number) => void;
}

export function AvatarUI(student: AvatarProps){
    return (
        <Card style={{flex: 1}}>
            <Card.Title 
                title={student.name} 
                subtitle={student.email}
                subtitleStyle={
                    styles.muted
                }
                left={props => 
                        <Image 
                            source={{uri: student.photo_url}} 
                            style={{
                                width: props.size, 
                                height: props.size,
                                borderRadius:  8
                            }} 
                        />
                }
                right={
                    props => 
                    <IconButton 
                        size={props.size}
                        icon={props => <Icon 
                                size={props.size}
                                source="trash-can-outline"
                                color={props.color}
                            />
                        }
                        onPress={() => student.onDelete?.(student.id)}
                    />
                }
            />
        </Card>
    );
}

export default AvatarUI;