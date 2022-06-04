import React from 'react';
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { useStore } from 'store';

export interface MusicCardProps {
  title: string;
  image: string;
  showAddButton?: boolean;
}

export const MusicCard: React.FunctionComponent<MusicCardProps> = ({
  title,
  image,
  showAddButton,
}) => {
  const theme = useMantineTheme();
  const { addMusic } = useStore();

  return (
    <Card shadow='sm' p='lg'>
      <Card.Section>
        <Image src={image} height={320} alt={title} />
      </Card.Section>

      <Group
        position='apart'
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{title}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant='light'
          color='blue'
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => addMusic({ title, image })}
        >
          Add To Playlist
        </Button>
      )}
    </Card>
  );
};
