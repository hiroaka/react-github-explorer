import React from 'react';

import { 
    List,
    ListItem,
    Left,
    Thumbnail,
    Right,
    Body,
    Text
} from 'native-base';

const RepoList = (props) => (
    <List style={{ marginTop:10 }} >
        {
            props.repositories.map( repo => (
                <ListItem key={repo.id} avatar>
                    <Left>
                        <Thumbnail source={{ uri  : repo.owner.avatar_url }}/>
                    </Left>
                    <Body>
                        <Text>{repo.fullName}</Text>
                        <Text note>{repo.description}</Text>
                    </Body>
                    <Right>
                        <Text note>{ repo.stargazers_count} starts</Text>
                    </Right>

                </ListItem>
            ))
        }
    </List>
);

export default RepoList;