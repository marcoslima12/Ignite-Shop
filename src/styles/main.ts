import { styled } from ".";

export const Container = styled('div', {
    width: '100%',
    minHeight: '100vh',
});

export const Main = styled('main', {
    width: '100%',
    marginLeft: 'auto',
    maxWidth: 'calc(100vw  - ((100vw - 1180px)/2))',
    display: 'flex',
});