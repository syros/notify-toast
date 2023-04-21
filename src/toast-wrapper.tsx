import {Toast, ToastProvider} from "@admiral-ds/react-ui";
import {ToastEmitter} from "./toast-emitter";

export const ToastWrapper = () => {
  return <ToastProvider autoDeleteTime={5000}>
    <ToastEmitter />
    <Toast style={{ top: 128, left: 64 }} />
  </ToastProvider>
}
