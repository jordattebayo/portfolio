import { useState } from "react";
import styled from "styled-components"

const LinkText = styled.p`
  font-size: clamp(20px, 1.5vw, 22px);
  line-height: clamp(22px, 2vw, 30px);
`

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  text-decoration: none;
`

const Link = styled.a`
  &:hover{
    text-decoration: underline;
  }
`

export function ContactButton() {
  return (
    <LinkText>
      <List>
      <ListItem>
        <Link target="_blank" href="https://www.linkedin.com/in/jordanmbooker">
          LinkedIn
        </Link>
      </ListItem>
      <ListItem>
        <Link target="_blank" href="mailto:jordan@jordanbooker.dev">
          Email
        </Link>
      </ListItem>
      </List>
    </LinkText>
  );
}