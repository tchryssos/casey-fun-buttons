import styled from '@emotion/styled';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  disabled,
  children,
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    type="button"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
