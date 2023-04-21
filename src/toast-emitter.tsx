import React from "react";
import {DefaultToastItem, ToastItemProps, ToastItemWithAutoDelete, useToast} from "@admiral-ds/react-ui";

type ID = number | string;

export const ToastEmitter = () => {
  const [toastStack, setToastStack] = React.useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  React.useEffect(() => {
    function handleShowToast(e: CustomEvent) {
      if (!e.detail) return;

      const toast = e.detail;
      const id = (new Date()).getMilliseconds();
      const renderToast = (id: ID) => {
        const handleOnClose = () => {
          removeToastItem({ id, renderToast });
          console.log('Toast is closed');
          setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
        };

        return (
          <>
            {autoDeleteTime ? (
              <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
                <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
              </ToastItemWithAutoDelete>
            ) : (
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            )}
          </>
        );
      };
      addToastItem({ id, renderToast });
      setToastStack((prev) => [...prev, { id, renderToast }]);
    }

    // @ts-ignore
    window.addEventListener('showToast', handleShowToast)

    // @ts-ignore
    return () => window.removeEventListener('showToast', handleShowToast)
  }, [addToastItem, autoDeleteTime, removeToastItem]);

  return null
}
