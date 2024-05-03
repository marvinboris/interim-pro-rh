import { Message } from "@types";
import { createContext, useContext } from "react";

type Type = Message | undefined;

export const MessageContext = createContext<{
  message: Type;
  setMessage: (message: Type) => void;
}>({
  message: undefined,
  setMessage: () => {},
});

export const useMessageContext = () => useContext(MessageContext);
