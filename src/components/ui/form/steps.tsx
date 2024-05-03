import { Edit2 } from 'iconsax-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiCheck } from 'react-icons/hi2';

import { cn } from '../../../utils';

import { Button } from '../buttons';

type FormStepsProps = React.ComponentProps<'div'> & {
  cancel: () => void;
  confirm: () => void;
  tabs?: boolean;
  untitled?: boolean;
  items: {
    key: string;
    condition: boolean;
    content: React.ReactNode;
    action?: React.ReactNode;
    summary?: React.ReactNode;
  }[];
};

export function FormSteps({
  items,
  tabs,
  untitled,
  cancel,
  confirm,
}: FormStepsProps) {
  const { t } = useTranslation();
  const [step, setStep] = React.useState(0);

  const noSummary = React.useMemo(
    () => !items.some((item) => item.summary),
    [items],
  );
  const processing = React.useMemo(
    () => (noSummary ? step < items.length - 1 : step < items.length),
    [noSummary, step, items],
  );

  return (
    <div className="flex flex-col">
      <div className="inline-flex mx-auto relative justify-center items-center gap-16 md:gap-32">
        <div className="absolute h-px inset-x-0 top-1/2 -translate-y-1/2 bg-neutral-200" />

        {items.map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-8 h-8 relative flex items-center justify-center rounded-full border outline-4 text-gray-700 text-sm font-medium leading-tight',
              i < step
                ? 'bg-secondary border-secondary outline-secondary text-white'
                : i === step
                  ? 'bg-accent border-accent outline-accent text-white'
                  : 'bg-stone-50 border-neutral-200 outline-stone-50',
            )}
          >
            {i < step ? <HiCheck className="w-5 h-5" /> : i + 1}

            <div className="absolute text-center text-sm md:text-base text-gray-700 top-full left-1/2 -translate-x-1/2 mt-2 truncate">
              {t('step', { count: i + 1, ordinal: true })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-16 flex-1 flex flex-col">
        {items.map((item, i) => (
          <div key={i} className={cn(i === step ? 'block' : 'hidden')}>
            <div className="flex items-center gap-3">
              {untitled ? null : (
                <div className="flex-1">
                  <h3 className="text-primary text-lg font-medium tracking-tight">
                    {t(item.key)}
                  </h3>
                  <p className="text-sm text-neutral-400 md:truncate">
                    {t(`${item.key}_desc`)}
                  </p>
                </div>
              )}

              {item.action}
            </div>

            <div
              className={cn(
                'mt-4 md:mt-7 overflow-auto scrollbar-p',
                tabs ? 'h-[256px]' : 'h-[356px]',
              )}
            >
              <div className="grid md:grid-cols-2 gap-3">{item.content}</div>
            </div>
          </div>
        ))}

        {step === items.length && !noSummary ? (
          <div className="text-primary font-medium tracking-tight">
            <div className="text-[32px]">{t('summary')}</div>

            <div
              className={cn(
                'mt-7 overflow-auto',
                tabs ? 'h-[236px]' : 'h-[336px]',
              )}
            >
              {items.map((item, i) => (
                <div key={item.key + i}>
                  {i > 0 ? <div className="h-px bg-neutral-200 my-12" /> : null}

                  <div className="flex items-center gap-6">
                    <div className="text-lg">{t(item.key)}</div>

                    <Edit2
                      variant="Bulk"
                      className="text-secondary w-6 h-6 cursor-pointer"
                      onClick={() => setStep(i)}
                    />
                  </div>

                  <div className="mt-7">{item.summary}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-7 md:mt-14">
          <div className="hidden md:block" />
          <Button
            color="outline-accent"
            onClick={step === 0 ? cancel : () => setStep((s) => s - 1)}
          >
            {t(step === 0 ? 'cancel' : 'back')}
          </Button>

          <Button
            disabled={processing ? !items[step].condition : false}
            color={
              processing && !items[step].condition
                ? 'outline-secondary'
                : 'secondary'
            }
            onClick={
              processing
                ? items[step].condition
                  ? () => setStep((s) => s + 1)
                  : undefined
                : confirm
            }
          >
            {t(processing ? 'next' : 'confirm')}
          </Button>
        </div>
      </div>
    </div>
  );
}
