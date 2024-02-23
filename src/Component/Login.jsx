import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

async function PostUsers(url, cred) {
  try {
    let res = await axios.post(url, cred);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //   console.log(form);
  const handleLogin = (e) => {
    e.preventDefault();
    PostUsers("https://backend-airbnb-stqx.onrender.com/api/users", form);
    console.log(form);
  };
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <FormControl>
            <ModalBody>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleLogin} bg="#ff5733" color="white">
                Login
              </Button>
              <Button
                colorScheme="black"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
