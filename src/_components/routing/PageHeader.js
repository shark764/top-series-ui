import React from 'react';
import { Box, Header, Nav, Text } from 'grommet';
import { Catalog, Channel, Multimedia, User } from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    label: 'Categories',
    to: '/categories',
    icon: (props) => <Catalog {...props} />,
  },
  {
    label: 'TV & Streaming Services',
    to: '/services',
    icon: (props) => <Channel {...props} />,
  },
  {
    label: 'Actors & Actresses',
    to: '/actors',
    icon: (props) => <User {...props} />,
  },
  {
    label: 'Series & TV Shows',
    to: '/series',
    icon: (props) => <Multimedia {...props} />,
  },
];

function PageHeader() {
  const location = useLocation();

  return (
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link to={link.to} key={link.to}>
              {link.icon({
                color: link.to === location.pathname ? 'accent-2' : 'accent-1',
              })}
              {` `}
              <Text
                color={link.to === location.pathname ? 'accent-2' : 'accent-3'}>
                {link.label}
              </Text>
            </Link>
          );
        })}
      </Nav>

      <Box justify="end" direction="row" />
    </Header>
  );
}

export default PageHeader;
