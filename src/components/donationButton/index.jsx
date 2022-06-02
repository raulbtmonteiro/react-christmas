import gift from "../../assets/images/gift.svg";
import { Button } from "./style";

export const DonationButton = ({ theme, onClick }) => {
  return (
    <Button theme={theme} onClick={onClick}>
      <img src={gift} alt="presente de natal" />
      Fazer Doação
    </Button>
  );
};
