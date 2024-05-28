import { Button, FormSteps } from "@/components";
import { Step1, Step2, Step3, Step4 } from "./steps";
import React from "react";
import { ArrowRight } from "react-iconly";

export function PageAdminApplicationsAdd() {
  const [step, setStep] = React.useState(1);
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return (
    <form className="relative rounded-3xl bg-white p-12 grid grid-cols-3 gap-x-3.5 gap-y-7">
      <FormSteps active={step} options={steps} />

      <div className="mt-6">
        <Button
          size="xl"
          className="w-full"
          onClick={() => setStep((s) => s + 1)}
        >
          <span>Continue</span>
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="mt-6 px-3 flex items-center">Step {step} of 6</div>
    </form>
  );
}
