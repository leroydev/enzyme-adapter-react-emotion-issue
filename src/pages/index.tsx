import styled from '@emotion/styled';

const InnerButton = (props: any) => {
  return <button {...props}>Inner Button</button>;
}

export const Button = styled(InnerButton)(() => {
  return {
    background: 'blue'
  };
});

export default function Home() {
  return (
    <Button onClick={() => alert('Hello, Emotion!')}>Hello, Emotion!</Button>
  );
}
