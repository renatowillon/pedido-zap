"use client";
import { useState } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";
import { Progress } from "../ui/progress";
import { StepUser } from "./stepUser";
import { CheckoutSteps } from "@/types/checkout-steps";
import { StepAdderss } from "./stepAdderss";
import { StepFinish } from "./stepFinish";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const DialogCheckout = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<CheckoutSteps>("user");
  let progressPct = 0;
  switch (step) {
    case "user":
      progressPct = 30;
      break;
    case "address":
      progressPct = 65;
      break;
    case "finish":
      progressPct = 100;
      break;
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados Pessoais"}
            {step === "address" && "Endereço de entrega"}
            {step === "finish" && "Envio para o Whatsapp"}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />
        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAdderss setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
