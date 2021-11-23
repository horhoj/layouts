export const getPrevSlideIndex = (
  currentSlideIndex: number,
  slideListLength: number,
): number => {
  if (currentSlideIndex > 0) {
    return currentSlideIndex - 1;
  }
  return currentSlideIndex - 1 + slideListLength;
};

export const getNextSlideIndex = (
  currentSlideIndex: number,
  slideListLength: number,
): number => {
  if (currentSlideIndex < slideListLength - 1) {
    return currentSlideIndex + 1;
  }
  return currentSlideIndex + 1 - slideListLength;
};
