import { FileText } from "@phosphor-icons/react/dist/ssr";
import * as classes from "./Welcome.css";
import { Title, Text, Anchor, Center } from "@mantine/core";

export const Welcome = () => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "#5f2dc2", to: "#A578FF" }}
        >
          Mobi{" "}
        </Text>
        Template
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
      <Center mt={36}>
        <FileText size={48} color="#A578FF" />
      </Center>
    </>
  );
};
