export interface ILink {
  id?: number;
  to: string;
  text: string;
  children?: React.ReactNode;
  withIcon?: boolean;
  handleOnClick?: () => void;
}
