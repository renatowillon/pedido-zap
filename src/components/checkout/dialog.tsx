import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";
import { Progress } from "../ui/progress";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const DialogCheckout = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dados Pessoais</DialogTitle>
        </DialogHeader>
        <Progress value={66} />
        <div className="flex flex-col gap-3">...</div>
      </DialogContent>
    </Dialog>
  );
};
