import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export default function AuthLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="400px" height="680px">
        {children}
      </StyledContainer>
    </Page>
  );
}
