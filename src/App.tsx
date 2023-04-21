import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ToastWrapper} from "./toast-wrapper";
import {Button} from "@admiral-ds/react-ui";
import {IdentifyToast} from "@admiral-ds/react-ui/dist/components/Toast/type";
import styled from "styled-components";

type NotificationStatus = 'info' | 'error' | 'success' | 'warning';

const items: Record<NotificationStatus, IdentifyToast> = {
  error: {
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  warning: {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  info: {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  success: {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
}

const StyledButtonsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`

function App() {
  const handleClick = (type: NotificationStatus) => {
    const identifyToast = items[type];
    window.dispatchEvent(new CustomEvent("showToast", { detail: identifyToast}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToastWrapper />
        <StyledButtonsWrapper>
          <Button appearance='danger' onClick={() => handleClick('error')}>Error</Button>
          <Button appearance='success' onClick={() => handleClick('success')}>Success</Button>
          <Button appearance='secondary' onClick={() => handleClick('warning')}>Warning</Button>
          <Button onClick={() => handleClick('info')}>Info</Button>
        </StyledButtonsWrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
