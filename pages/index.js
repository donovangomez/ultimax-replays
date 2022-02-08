import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as="main" minH="100vh" direction="column">
      <Flex flex="1" border="1px" borderColor="gray.600">
        <h2>Hello</h2>
        <Form />
      </Flex>
      <Flex flex="1">
        <h2>Hello Bish</h2>
      </Flex>
    </Flex>
  );
}
