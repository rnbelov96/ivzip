/* eslint-disable no-param-reassign */
export {};

const leftColor = '#ffd744';
const rightColor = '#dcdbdb';

const rangeElList = document.querySelectorAll('.js-range');

const homePartsRange = document.querySelector(
  '.js-home-parts-range',
) as HTMLInputElement;
const profiPartsRange = document.querySelector(
  '.js-profi-parts-range',
) as HTMLInputElement;
const repairRange = document.querySelector(
  '.js-repair-range',
) as HTMLInputElement;

const calcResultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let homePartsCurrentStep;
let profiPartsCurrentStep;
let repaitCurrentStep;

const calcResult = () => {
  result = (Number(homePartsRange.value) * 1000
      + Number(profiPartsRange.value) * 1000
      + Number(repairRange.value) * 1000)
    * 0.125;
  calcResultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

homePartsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  homePartsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (homePartsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (homePartsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

profiPartsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  profiPartsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (profiPartsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (profiPartsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

repairRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  repaitCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (repaitCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (repaitCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
